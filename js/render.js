//Document: render.js
//Author: Akshay Joshi
//global scope for vars
var currentEvent;
var flagPresent=true;
var Calendar = (function()
{
  var self = this;
  function layOutDay(array)
  {
    if (array.length)
    {
      initialize();
      array.sort(function(a,b){
        return (a.start-b.start);
      });
      var i,
          end = -1,
          IndexVal = -1;
      for (i=0; i<array.length; i++)
      {
        if (array[i].start < end) //overlapping
        {
          array[i].IndexVal = IndexVal;
          end = Math.max(array[i].end, end);
        }
        else
        {
          IndexVal++;
          array[i].IndexVal = IndexVal;
          columnWidths[IndexVal] = 0;
          end = array[i].end;
        }
      }
      AssignCols(array);
      display();
    }
  }
//initialize all vars
  function initialize ()
  {
    var cols,
        $el,
        columnWidths;
      self.cols       = [];
      self.$el           = $('.events-container');
      self.columnWidths  = [];
  }

  function AssignCols(array)
  {
    var arrayLen = array.length,
        maxColumnIndex,i,j;
    for (i=0; i<arrayLen; i++)
    {
      flagPresent = true;
      for (j=0; j<cols.length; j++)
      {
        if (!isCollide(array[i], cols[j]))
        {
          flagPresent = false;
          cols[j].push(array[i]);//pushing to empty cols
          maxColumnIndex = Math.max(columnWidths[array[i].IndexVal], j);
          columnWidths[array[i].IndexVal] = maxColumnIndex;
          break;
        }
      }
      if (flagPresent) //flag high collisions
      {
        cols.push([array[i]]);
        columnWidths[array[i].IndexVal] = cols.length - 1;
      }
    }
  }

function isCollide(event, event2)
{

    var i;

    for (i=0; i<event2.length; i++)
    {
      // collision
      if((event.start < event2[i].end) && (event.end > event2[i].start))
      {
        return true;
      }
    }
    return false;
}
//display
function display()
{
    var totalPercent = 98,
        currentEvent;
    for (var i=0; i<cols.length; i++)
    {
      for (var j=0; j<cols[i].length; j++)
      {
        currentEvent = cols[i][j];
        var  width       = (totalPercent / (columnWidths[currentEvent.IndexVal] + 1));
        var  height      = currentEvent.end - currentEvent.start;
        var  leftOffset  = i * width;
        if(height > 40)
        {
          var  dataText = "<a>Sample Event </br><span>Sample Location<span><a>";
        $el.append('<div class="event" style="width: ' + width + '%; height:'+ height +'px; top:' + currentEvent.start + 'px; left: ' + leftOffset + '%">' + dataText + '</div>');
        }
        else {
          var  dataText = "<a>Sample Event<a>";
        $el.append('<div class="event" style="width: ' + width + '%; height:'+ height +'px; top:' + currentEvent.start + 'px; left: ' + leftOffset + '%">' + dataText + '</div>');
      }
      }
    }
  }
  //public layout
  return { layOutDay : layOutDay }
})();

var array = [{start: 200, end: 250}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670},{start: 0, end: 90} ];
Calendar.layOutDay(array);
