const apiUrl = 'AppData.json';
const resultContainer = document.getElementById('result-container');

if (resultContainer) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.companies) {
        const companiesSection = document.createElement('div#companies');
        companiesSection.innerHTML = '<h2>Companies</h2>';
        
        data.companies.forEach(company => {
          const companyDiv = document.createElement('div.chocolat-parent');
          companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p><strong>Value:</strong> ${company.value}</p>
            <p><strong>Key:</strong> ${company.key}</p>
            <p><strong>Status:</strong> ${company.status}</p>
            <p><strong>Status Reason:</strong> ${company.status_reason}</p>
            <p><strong>Status URL:</strong> ${company.status_url || 'N/A'}</p>
            <p><strong>Notes:</strong> ${company.notes || 'N/A'}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website || 'N/A'}</a></p>
            <p><strong>Twitter:</strong> <a href="${company.twitter}" target="_blank">${company.twitter || 'N/A'}</a></p>
            <p><strong>Facebook:</strong> <a href="${company.facebook}" target="_blank">${company.facebook || 'N/A'}</a></p>
            <p><strong>Logo:</strong> <a href="${company.logo_url_retina}" title="${company.name}" class="chocolat-image"><img src="${company.logo_url}" alt="${company.name}"></a></p>
            <!-- <p><strong>Logo (Retina):</strong> <img src="${company.logo_url_retina}" alt="Company Logo Retina"></p> -->
            <!-- Add more details as needed -->
            <hr>
          `;
          companiesSection.appendChild(companyDiv);
        });

        resultContainer.appendChild(companiesSection);
      }

      if (data.features) {
        const featuresSection = document.createElement('div#features');
        featuresSection.innerHTML = '<h2>Features</h2>';

        data.features.forEach(feature => {
          const featureDiv = document.createElement('div.chocolat-parent');
          featureDiv.innerHTML = `
            <h3>${feature.title}</h3>
            <p><strong>Body:</strong> ${feature.body}</p>
            <p><strong>Link:</strong> <a href="${feature.link_target}" target="_blank">${feature.link_title}</a></p>
            <p><strong>Cover Image:</strong> <a href="${feature.cover_image_url_retina}" class="chocolat-image" title="${feature.title}"><img src="${feature.cover_image_url}" alt="${feature.title}"></a></p>
            <!-- <p><strong>Cover Image (Retina):</strong> <img src="${feature.cover_image_url_retina}" alt="Cover Image Retina"></p> -->
            <p><strong>Article Image:</strong> <a href="${feature.article_header_image_url_retina}" class="chocolat-image" title="${feature.title}"><img src="${feature.article_header_image_url}" alt="${feature.title}"></a></p>
            <!-- <p><strong>Article Image (Retina):</strong> <img src="${feature.article_header_image_url_retina}" alt="Article Header Image Retina"></p> -->
            <!-- Add more details as needed -->
            <hr>
          `;
          featuresSection.appendChild(featureDiv);
        });

        resultContainer.appendChild(featuresSection);
      }
      const lastUpdatedDiv = document.createElement('div#last-updated');
      lastUpdatedDiv.innerHTML = `<p><strong>Last Updated:</strong> ${data.last_updated}</p>`;
      
      resultContainer.appendChild(lastUpdatedDiv);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
} else {
  console.error('Result container not found.');
}
