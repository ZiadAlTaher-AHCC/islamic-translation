import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-new-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-details.component.html',
  styleUrl: './new-details.component.css'
})
export class NewDetailsComponent {
  htmlContent = signal<string>('');


  ngOnInit() {
    // fetch HTML from database

    const html = `  <div class="page-wrapper">
        <div class="details-card">
            <!-- Header -->
            <div class="details-header">
                <h1 class="page-title">Inaugural International Conference: The Qurʾanic Linguistics Research Group</h1>
                
                <div class="meta-row">
                    <span class="badge event-badge">📅 14-15 March, 2023</span>
                    <span class="badge">🌐 Online Event</span>
                    <span class="stats-badge">👁️ 1,245 Views</span>
                    <span class="stats-badge">⬇️ 324 Downloads</span>
                </div>
            </div>

            <div class="main-content-grid">
                <!-- Left: Image -->
                <div class="image-container">
                    <img src="https://www.quran-earlyislam.com/local/cache-vignettes/L450xH148/5b67fd41a611717f2cc530644d0f66-ee633.jpg" alt="Conference Banner" class="event-image">
                </div>

                <!-- Right: Info -->
                <div class="info-container">
                    <!-- Overview -->
                    <div>
                        <h2 class="section-title">About the Conference</h2>
                        <p class="description-text">
                            The Qurʾānic Linguistics Research Group (QLG) is delighted to announce that it will be hosting its Inaugural International Conference on Qurʾānic linguistics in collaboration with SOAS Centre of Islamic Studies. The conference will bring together academics worldwide to showcase the latest advances in Qur'anic linguistics research.
                        </p>
                    </div>

                    <!-- Event Details -->
                    <div class="details-grid">
                        <div class="detail-item">
                            <span class="label">Event Date</span>
                            <span class="value">14-15 March, 2023</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Format</span>
                            <span class="value">Online via Zoom</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Organizer</span>
                            <span class="value">Swansea University</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Partner</span>
                            <span class="value">SOAS Centre of Islamic Studies</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Submission Deadline</span>
                            <span class="value">28 October, 2022</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Contact</span>
                            <span class="value">cis@soas.ac.uk</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Conference Themes -->
            <div style="margin-top: 2.5rem;">
                <h2 class="section-title">Conference Themes</h2>
                <div class="themes-section">
                    <div class="theme-item">
                        <div class="theme-title">1. Linguistic Theories & Approaches</div>
                        <p>Application of modern linguistic theories to the Qurʾānic text, including Pragmatics, Relevance Theory, Speech Acts Theory, Text Linguistics, Systemic Functional Linguistics, and linguistic analyses of coherence and cohesion issues.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">2. Discourse Analysis</div>
                        <p>Linguistic analysis of Qurʾānic discourse types such as narratives, dialogues, polemics, and hymns.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">3. Textual Structures</div>
                        <p>Linguistic analysis of Qurʾānic themes and textual structures.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">4. Grammar & Syntax</div>
                        <p>Qurʾānic grammar and syntax, including particles, issues in agreement, word order, sentence structure and types of verbs.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">5. Phonology & Morphology</div>
                        <p>Analyses of phonology and morphology in the Qur'an.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">6. Time & Aspect Issues</div>
                        <p>Time and aspect issues including gnomic present.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">7. Qurʾānic Exegeses</div>
                        <p>Linguistic and grammatical material in Qurʾānic exegeses.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">8. Arabic Linguistics & Philology</div>
                        <p>Qur'anic material in modern and classical Arabic linguistics and philology.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">9. Semantics</div>
                        <p>Semantics, including lexemes, lexical units and fields, homonymy, polysemy and Lexical Networks.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">10. Translation Analysis</div>
                        <p>Various approaches to the linguistic analysis of Qurʾān translations.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">11. Comparative Structures</div>
                        <p>Comparison of grammatical and rhetorical structures in Semitic texts, including Biblical Hebrew and the Qurʾān.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">12. Variant Readings</div>
                        <p>The impact of Qurʾānic variant readings on the production of meaning and grammatical structures.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">13. Hermeneutics</div>
                        <p>Qurʾānic hermeneutics from a linguistic point of view.</p>
                    </div>

                    <div class="theme-item">
                        <div class="theme-title">14. Islamic Sciences</div>
                        <p>Linguistics in ʿUlūm al-Qurʾān and Uṣūl al-Fiqh.</p>
                    </div>
                </div>
            </div>

            <!-- Organizing Committee -->
            <div style="margin-top: 2.5rem;">
                <h2 class="section-title">Conference Organizing Committee</h2>
                <div class="organizers-grid">
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Salwa El-Awa</div>
                        <div class="organizer-affiliation">Swansea University</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Yehudit Dror</div>
                        <div class="organizer-affiliation">University of Haifa</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Nora Eggen</div>
                        <div class="organizer-affiliation">Independent Scholar, Oslo</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Orhan Elmaz</div>
                        <div class="organizer-affiliation">University of St Andrews</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Muhammad Taghian</div>
                        <div class="organizer-affiliation">Helwan University</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Abdelmadjid Ben Habib</div>
                        <div class="organizer-affiliation">University of Tlemcen</div>
                    </div>
                    <div class="organizer-card">
                        <div class="organizer-name">Dr Shuruq Naguib</div>
                        <div class="organizer-affiliation">Lancaster University</div>
                    </div>
                </div>
            </div>
<br>
            <!-- Publication Info -->
            <div class="theme-item">
                <h3 class="theme-title">Publication Opportunity</h3>
                <p>A selection of the papers presented at the conference will be published in a special issue of the Journal of Qur'anic Studies published by Edinburgh University Press. Subject to peer review, articles will be selected for publications based on academic quality, innovation and contribution of new knowledge to the field.</p>
            </div>
        </div>
    </div>`;
    this.htmlContent.set(html);
  }


}
