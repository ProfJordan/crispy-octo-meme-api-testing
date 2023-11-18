const apiUrl = 'https://issue-tracker.freecodecamp.rocks/api/issues/apitest/';
const resultContainer = document.getElementById('result-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(issue => {
      const issueDiv = document.createElement('div');
      issueDiv.innerHTML = `
        <h3>${issue.issue_title}</h3>
        <p><strong>Issue Text:</strong> ${issue.issue_text}</p>
        <p><strong>Created On:</strong> ${issue.created_on}</p>
        <p><strong>Updated On:</strong> ${issue.updated_on}</p>
        <p><strong>Created By:</strong> ${issue.created_by}</p>
        <p><strong>Assigned To:</strong> ${issue.assigned_to}</p>
        <p><strong>Open:</strong> ${issue.open}</p>
        <p><strong>Status Text:</strong> ${issue.status_text}</p>
        <hr>
      `;
      resultContainer.appendChild(issueDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
