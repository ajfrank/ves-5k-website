// Load and display sponsors from JSON file
async function loadSponsors() {
    try {
        const response = await fetch('sponsors.json');
        const sponsors = await response.json();
        
        // Group sponsors by tier
        const sponsorsByTier = {
            platinum: sponsors.filter(s => s.tier === 'platinum'),
            gold: sponsors.filter(s => s.tier === 'gold'),
            silver: sponsors.filter(s => s.tier === 'silver'),
            bronze: sponsors.filter(s => s.tier === 'bronze'),
            cheerleader: sponsors.filter(s => s.tier === 'cheerleader')
        };
        
        // Display sponsors for each tier
        displaySponsors('platinum', sponsorsByTier.platinum);
        displaySponsors('gold', sponsorsByTier.gold);
        displaySponsors('silver', sponsorsByTier.silver);
        displaySponsors('bronze', sponsorsByTier.bronze);
        displaySponsors('cheerleader', sponsorsByTier.cheerleader);
        
    } catch (error) {
        console.error('Error loading sponsors:', error);
        // If sponsors.json doesn't exist or fails to load, show a message
        displayNoSponsors();
    }
}

function displaySponsors(tier, sponsors) {
    const container = document.querySelector(`#${tier}-sponsors .sponsors-grid`);
    
    if (!container) return;
    
    // If no sponsors for this tier, hide the tier section
    if (sponsors.length === 0) {
        document.getElementById(`${tier}-sponsors`).style.display = 'none';
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create sponsor cards
    sponsors.forEach(sponsor => {
        const card = createSponsorCard(sponsor);
        container.appendChild(card);
    });
}

function createSponsorCard(sponsor) {
    const card = document.createElement('div');
    card.className = 'sponsor-card';
    
    // Add logo if available
    if (sponsor.logo) {
        const logo = document.createElement('img');
        logo.src = sponsor.logo;
        logo.alt = `${sponsor.name} logo`;
        logo.className = 'sponsor-logo';
        logo.onerror = function() {
            // If logo fails to load, hide the image
            this.style.display = 'none';
        };
        card.appendChild(logo);
    }
    
    // Add sponsor name
    const name = document.createElement('div');
    name.className = 'sponsor-name';
    name.textContent = sponsor.name;
    card.appendChild(name);
    
    // Add description if available
    if (sponsor.description) {
        const description = document.createElement('div');
        description.className = 'sponsor-description';
        description.textContent = sponsor.description;
        card.appendChild(description);
    }
    
    // Add link if available
    if (sponsor.website) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.open(sponsor.website, '_blank');
        });
    }
    
    return card;
}

function displayNoSponsors() {
    // If no sponsors are loaded, show a message
    const container = document.getElementById('sponsors-container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <p style="font-size: 1.125rem; color: var(--gray);">
                    🎉 Sponsorship opportunities available! Be the first to support our event.
                </p>
            </div>
        `;
    }
}

// Load sponsors when the page loads
document.addEventListener('DOMContentLoaded', loadSponsors);
