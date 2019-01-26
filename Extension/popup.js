// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "' + color + '";'
//       });
//   });
// };

window.addEventListener('load', function(evt) {
  document.getElementById('form').addEventListener('submit', saveEntry);
});


function load() {

}

function saveEntry() {
  event.preventDefault();

  chromep.tabs.query({
    'active': true,
    'lastFocusedWindow': true
  }).then(function(tabs) {

    let form = document.getElementById('form');
    console.log(tabs);
    // var url = tabs[0].url;
    var videoData = {
      // url : tabs[0].url,
      url: 'test',
      data: [{
        tag: 'Label',
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
      }]
    }

    // document.getElementById("test").value = videoData.url + 'Start Date: ' + videoData.startDate + ' End Date: ' + videoData.endDate;
    // document.getElementById("test").value = startDate;
    return videoData;
  }).then((videoData) => {
    console.log('Video Data', videoData);
    chrome.storage.sync.get([videoData.url], function(result) {

      console.log('Value currently is ', result);

      if (videoData.url in result) {
        // Update
        console.log('Saved!');

        // Update parameter
        // then save

      } else {
        //Save
        console.log('No Key');
        //Create New Item
        // saveEntry
        console.log(videoData);
        var data = {};
        data[videoData.url] = videoData;

        chrome.storage.sync.set(data, function() {
          console.log('Saved new value');
        });
      }
      // document.getElementById("test").value = result;
    });

  });
}
