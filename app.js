var url = "https://treasurehunt-backend-cs.herokuapp.com/leaderboard";


async function getLeaderboard() {
  let resultsData = null;
  try {
    const res = await fetch(url);
    resultsData = await res.json();
    if (resultsData) {
      $("body").addClass("loaded");
    }
    resultsData.result.forEach(result => {
      var container = document.querySelector("#myTable");
      container.innerHTML += `<tr class="data">
        <td>
        ${result.id}
        </td>
        <td>
        ${result.name} 
        </td>
        <td> 
        ${result.points}
        </td> 
        </tr>`;
    })  
  } catch(err) {
    console.log(err);
    alert("Something went wrong while loading the leaderboard.");
  }
}

getLeaderboard();

function searchName() {
  // Declare variables
  var input, filter, table, data, i, txtValue;
  inputText = document.getElementById("myInput");
  filter = inputText.value.toUpperCase();
  table = document.getElementById("myTable");

  let rowData = table.getElementsByTagName("tr"); // selects all elemnts with tag tr

  // Loop through all table rows [inside a node list], and hide those who don't match the search query
  for (i = 0; i < rowData.length; i++) {
    data = rowData[i].getElementsByTagName("td")[1];
    if (data) {
      txtValue = data.textContent || data.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowData[i].style.display = "";
      } else {
        rowData[i].style.display = "none";
      }
    }
  }
}

// var url =
//   "http://gsx2json.com/api?id=1jFYXinwU3a-9-w_PlVIn6IBoSGn1d7cMJZr7L2KUJp0&sheet=1";
