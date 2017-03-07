var displayJSON = function(data) { console.log(JSON.stringify(data, null, 2));};


// var BASE_WIDTH = 800, BASE_HEIGHT = 600;
var BASE_WIDTH = window.miConfig.base.width,
  BASE_HEIGHT = window.miConfig.base.height,
  CENTER_X = window.miConfig.base.centerX,
  CENTER_Y = window.miConfig.base.centerY ;

var BASE_RATIO = BASE_WIDTH / BASE_HEIGHT;

var POSITIONS = miConfig.areas.reduce(function(agg, area) {
  agg[area.label] = area.position;
  return agg;
}, {});

var LABELS_MAP = miConfig.areas.reduce(function(agg, area) {
  agg[area.label] = area.longLabel;
  return agg;
}, {});
var LONGLABELS_MAP = miConfig.areas.reduce(function(agg, area) {
  agg[area.longLabel] = area.label;
  return agg;
}, {});

var DOMAINS = {
  'Management': {
    name: 'Management',
    index: 1,
    longName: "Data Management",
    description: "I can access my documents, invoices, contracts, insurance, records at any time and from any place...<br>I use them, for example to provide proof of purchase, demonstrate a right, or quite simply to make my daily life easier.",
  },
  'Self-knowledge': {
    index: 2,
    name: 'Self-knowledge',
    longName: 'Self Knowledge',
    description: "I visualize my travel, my consumption, my skills, my health indicators in an understandable (even fun) way... I can also measure my sleep, my physical activity, my concentration. This information produce dashboards and all kinds of presentations to help me know myself better, to situate myself or measure my performance or my progress toward a goal.",
  },

  'Decisions and Action': {
    index: 3,
    name: "Decisions and Action",
    longName: "Making & Implementing Better Decisions",
    description: "I compare offers, figure out incomprehensible rates, I express my purchase intentions and invite sellers to respond, I post my own requests for proposals... I am in command of the relationship.",
  },
  'Control': {
    index: 4,
    longName: "Personal Data Control, Sharing, & Protection",
    name: 'Control',
    description: "I want to know who knows what about me, who has access to my data and who does what with it. I also want to switch between my different identities in a simple and secure manner, demonstrate that I have rights without having to reveal who I am, not have to re-enter the same informa- tion for the thousandth time.",
  },
  'Contribution': {
    index: 5,
    longName: "Contribution to Research & Collective Endeavours",
    name: "Contribution",
    description: "I share some of my data, anonymously, to contribute to a health study, public transport, consumption habits...",
  },
  'Conscience': {
    index: 6,
    longName: "Value-Based Living",
    name: "Conscience",
    description: "I measure my carbon footprint and access tools and advice to reduce it. I analyze my shopping list to buy more organic or more fair-trade products. I can more closely align my practices and consumption with my values without having to spend too much time on it.",
  },
  'Life experience': {
    index: 7,
    longName: "Experience and Social Practices",
    name: "Life experience",
    description: "Surprise me, make me experience new things thanks to my data! I want to be surprised, discover new places, new people, have fun, be moved, learn without realizing...",
  }
};


var infos = [];
var defis = {};
var currentFilter = {};
var popin = null;
var detailPopin = null;

// Create popup

$(document).ready(function(){
    getJSON(refresh);
    //setDimensions();
    setListeners();
});

getJSON = function(callback) {
  $.getJSON(miConfig.infosUri, function(data) {
      infos = data.export.map(function(info){
        info.countries = info['Country/ies of origin'].split('/').map(function(country) {
          var name = country.trim();
          if (!name) { return null; }

          var code = countryName2Code[name.toLowerCase()];
          if (!code) { return null; }

          return {
              name: name,
              code: code,
              flagURI: 'img/flags/' + code.toLowerCase() + '.png',
          };
      }).filter(function(obj) { return !!obj});

        info.tags = info.Tags.split(',').map(function(s) { return s.trim(); });
        info.domain = LONGLABELS_MAP[info['Use Case category']];
        info.status = {
          'Just an idea or a scenario': 'idea',
          'Under development': 'under_development',
          'Currently operational': 'operational',
        }[info['Is this service or application...']];
        info.linkOnly = !(info['Slogan / Tweet-length description'] ||
          info['Long description']);
        for (var k in info) {
          info[k.replace(/[\ \/\-\?\(\))]/g, '_')] = info[k];
        }

        return info;
      });
      callback();
  });
};

// TODO
setDimensions = function(forcedWidth) {
  var wW, wH;
  if (forcedWidth) {
    wW = forcedWidth;
    wH = forcedWidth;
  } else {
    // Set dimensions
    wW = $(window).width();
    wH = $(window).height();
  }

  var width, height;
  if ((wW / wH) < BASE_RATIO) {
    width = wW;
    height = wW / BASE_RATIO ;
  } else {
    height = wH;
    width = wH * BASE_RATIO ;
  }

  $("#container").width(width);
  $("#container").height(height);
  $("#container").css('margin-left', (wW - width) / 2);

  //$("#container").click(onClickOpenListPopin);
};


setListeners = function() {
  // TODO $("#container").click(onClickDisk);

  $('form input:radio').change(function() {
    updateFilter({ status: $('form input:radio:checked').val() });
  });

  // debouncer($, 'slowInput', 'input', 30);
  $('#query').on('input', function(ev) {
    // TODO debounce !
    updateFilter({ 'q': $('#query').val().toLowerCase() });

  });
  // updateFilter({});
};

refresh = function() {
  var list = filterList(currentFilter).infos;
  console.log(list);
  var byDomain = groupByKey(list, 'domain');
  $('main #list').empty();
  Object.keys(byDomain).sort().forEach(function(name) {
    console.log(byDomain[name]);
    var domainElem = $(domainTemplate($.extend({
      byStatus: groupByKey(byDomain[name], 'status', 'Title'),
    }, DOMAINS[name])));
    $('main #list').append(domainElem);
    domainElem.find('li span').click(function(ev) {
      ev.stopPropagation();
      var name = $(ev.target).parent().data('title');
      //BAD IE9 var name = ev.target.parentElement.dataset.title;
      openDetailPopin(getByKV('Title', name));
    });


  });
}

// onClickOpenListPopin = function(ev) {
//     var coord = toResizedPolar(ev);
//     var inArea;
//     inArea = miConfig.areas.filter(function(area) {
//       if (area.rMin < coord.r && coord.r < area.rMax) {
//         var tMax = area.tMax;
//         var t = coord.t
//         if (area.tMin > area.tMax) {
//           tMax += 2 * Math.PI;
//           if (coord.t < area.tMin) { t += 2 * Math.PI; }
//         }
//         if (area.tMin < t && t < tMax) {
//           return true;
//         }
//       }
//       return false;
//     });

//     if (inArea.length > 0) {
//       var category = inArea[0].longLabel;
//       var filter = { 'Use Case category': category };
//       openListPopin(filter);
//     }
// };


// resetDefi = function() {
//   var defiBtn, src ;
//   if (currentDefi != 'all') {
//       defiBtn = $('[data-defi="' + currentDefi + '"].defi');
//       src = defiBtn.attr('src').split('-')[0];
//       defiBtn.attr('src', src + '.png');
//   }

//   currentDefi = 'all';
//   $('img[data-typology]').hide();
// }


// openListPopin = function(filter) {
//   if (popin) {
//     popin.remove();
//     popin = null;
//   }
//   var list = prepareListForPopin(filter);
//   popin = $(templatelistpopin(list));

//   popin.find('.close').click(function(ev) {
//     ev.stopPropagation();
//     popin.remove();

//   });

//   popin.find('li span').click(function(ev) {
//       ev.stopPropagation();
//       var position = {
//         left: $(ev.target).parents('.listpopin').position().left - 182 - Math.random() * 5,
//         top: ev.pageY - $('#container').offset().top - 20,
//       };
//       var name = $(ev.target).parent().data('title');
//       //BAD IE9 var name = ev.target.parentElement.dataset.title;
//       openDetailPopin(getByKV('Title', name), position);
//     });

//   $("#container").append(popin);
// };

// prepareListForPopin = function(filter) {
//   var list;
//   list = filterList(filter);
//   list.position = POSITIONS[list.title];
//   list.longLabel = LABELS_MAP[list.title];
//   list.byStatus = groupByKey(list.infos, 'status', 'Title');
//   return list;
// };

openDetailPopin = function(info) {
  console.log(info);
  // Only one detailpopin at a time
  if (detailPopin) {
    detailPopin.remove();
    detailPopin = null;
  }

  detailPopin = $(templatedetail(info));

  detailPopin.find('.close').click(function(ev) {
    ev.stopPropagation();
    detailPopin.remove();
  });

  $("body").append(detailPopin);

  // detailPopin.find("img").error(function(){ $(this).hide(); });
  detailPopin.find('h1.textfill').textfill({ maxFontPixels: 90, });
  detailPopin.find('.textfill.slogan').textfill({ maxFontPixels: 30, });
  detailPopin.find('.textfill.description').textfill({ maxFontPixels: 20, });
  detailPopin.find('.textfill.website').textfill({ maxFontPixels: 14, });
  detailPopin.find('.textfill.tags').textfill({ maxFontPixels: 14, });
};


////////////// Display for print version ///////////////

displayPrint = function() {

  $('#credits').hide();
  $('#printcontainer').show();
  setDimensions(650);

  // 1 : TODO : display list for each category
  var sortedCategory = Object.keys(LONGLABELS_MAP).sort();

  var byCategory = groupByKey(infos, 'Use Case category', 'Title');
  sortedCategory.forEach(function(label) {
    byStatus = groupByKey(byCategory[label], 'status', 'Title');
    $('#printcontainer').append('<div class="printcontainer">' +
      templateprintlist({
        title: LONGLABELS_MAP[label],
        longLabel: label,
        byStatus: byStatus,
      })
      + '</div>');
  });

  // 2 : display list of all usecase card.
  list = filterList({ linkOnly: false });
  byCategory = groupByKey(list.infos, 'Use Case category', 'Title');
  var index = 0;
  sortedCategory.forEach(function(label) {
    // TODO : STUB !
    // if (index >  3) { return; }

    byCategory[label].forEach(function(useCase) {
      $('#printcontainer').append(
          '<div class="printcontainer' + index % 2 + '">' +
          templateusecase(useCase)
        + '</div>');

      index++;
    });

      // $('#container').hide();
  });
  $("img").error(function(){ $(this).hide(); });
  $('h1.textfill').textfill({ maxFontPixels: 90 });
  $('.textfill.slogan').textfill({ maxFontPixels: 30, });
  $('.textfill.description').textfill({ maxFontPixels: 20, });

  $('.textfill.category').textfill({ maxFontPixels: 20, });
  $('.textfill.website').textfill({ maxFontPixels: 20, });
};


////////////// Manage filter ///////////////
// var throttledRefresh = $.throttle(500, refresh);
updateFilter = function(options) {
  $.extend(currentFilter, options);
  if (currentFilter.status === 'all') {
    delete currentFilter.status;
  }
  console.log(currentFilter);
  // throttledRefresh();
  refresh();
}
////////////// Data filtering and manipulations ///////////////

getByKV = function(key, value) {
    var filter = {};
    filter[key] = value;
    var list = filterList(filter);
    return list.infos[0];
};

filterList = function(filter) {
  var list = {
    title: "search",
  };


  // Helper : pass a test on the value (which may be an array of values)
  var valueSome = function(value, test) {
    if (value && value instanceof Array) {
      return value.some(test);
    } else {
      return test(value);
    }
  };
  var hasValue = function(value, filterValue) {
    return valueSome(value, function(v) { return v === filterValue ; });
  };

  if ('Use Case category') {
    list.title = LONGLABELS_MAP[filter['Use Case category']];
  }
  list.infos = infos.filter(function(info) {
      var keep = true;
      var passFilter = false;
      for (k in filter) {
        if (k === 'q') { // key word search, filter[k] is a String.
          passFilter = Object.keys(info).some(function(key) {
            return valueSome(info[key], function(v) {
              if (typeof v !== "string") { return false; }
              return v.toLowerCase().indexOf(filter[k]) !== -1 ; });
          });
        // } else if (k === 'status') {
        //   passFilter = info[filter[k][$.inArray(info.desc, defis[filter[k]]) != -1;
        } else if (filter[k] instanceof Array) {
          passFilter = filter[k].some(function(v) { return hasValue(info[k], v); });
        } else {
          passFilter = hasValue(info[k], filter[k]);
        }

        keep = keep && passFilter ;
      }
      return keep;
  });
  return list;
};

// // Split list by values of given key, in by[Key] field.
// groupByKey = function(list, key, sortKey) {
//   var byKey = 'by' + key[0].toUpperCase() + key.slice(1);
//   list[byKey] = {};

//   list.infos.forEach(function(info) {

//     var v = info[key];
//     if (!v) { return; }

//     if (!list[byKey][v]) {
//       list[byKey][v] = [];
//     }
//     list[byKey][v].push(info);
//   });

//   return list;
// };

// Split list by values of given key, in by[Key] field.
groupByKey = function(list, key, sortKey) {
  var byKey = 'by' + key[0].toUpperCase() + key.slice(1);
  var res = {};

  list.forEach(function(info) {

    var v = info[key];
    if (!v) { return; }

    if (!res[v]) {
      res[v] = [];
    }
    res[v].push(info);
  });

  if (sortKey) {
    for (var k in res) {
      res[k].sort(function(a, b) {
        if (a[sortKey] < b[sortKey]) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
  return res;
};

groupByKeyword = function(list) {
  list.byKeyword = {};

  list.infos.forEach(function(info) {
    // TODO : domain --> keyword.
    if (!(info.domain in list.byKeyword)) {
      list.byKeyword[info.domain] = [];
    }
    list.byKeyword[info.domain].push(info);

  });
  return list;
};

extractTypologies = function(list) {
  typologies = {};

  list.infos.forEach(function(info) {
    typologies[info.typology] = true;
  });

  return typologies;
}


////////////// Handle polars /////////////////////////
getSizeRatio = function() {
  return $("#container").width() / BASE_WIDTH ;
}

getOffsetCoordinatesOfEvent = function(e) {
  var x = (e.offsetX || e.pageX - $(e.target).offset().left);
  var y = (e.offsetY || e.pageY - $(e.target).offset().top);
  return [x, y];
}

toResizedPolar = function(e) {
  var coords = getOffsetCoordinatesOfEvent(e);
  var x = coords[0];
  var y = coords[1];

  var sizeRatio = getSizeRatio();

  // apply ratio
  x = x / sizeRatio ;
  y = y / sizeRatio ;

  // var CENTER_X = 406 , CENTER_Y = 300 ;

  // move to centered direct cartesian
  x = x - CENTER_X ;
  y = -y + CENTER_Y ;


  // convert to polar
  r = Math.sqrt(x * x + y * y);
  t = Math.atan2(y, x);
  t = (t + 2 * Math.PI) %  (2 * Math.PI)
  return {r: r, t: t};
}
////////////// /////////////////////////