---
title: "STEP: toward a semantics-aware framework for monitoring community-scale infrastructure"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Jian Peng
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2024-12-20"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-12-20"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "Data-Centric Engineering"
  short_name: "DCE"
  publisher: "Cambridge University Press"

peer_reviewed: true
open_access: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "NSF SWADE"

abstract: |-
  Urban communities rely on built utility infrastructures as critical lifelines
  that provide essential services such as water, gas, and power, to sustain
  modern socioeconomic systems. These infrastructures consist of underground
  and surface-level assets which are operated and geo-distributed over large
  regions where continuous monitoring for anomalies is required but challenging
  to implement. This paper addresses the problem of deploying heterogeneous IoT
  sensors in these networks to support future decision-support tasks, e.g.,
  anomaly detection, source identification and mitigation. We use *stormwater*
  as a driving use case; these systems are responsible for drainage and flood
  control, but act as conduits that can carry contaminants to receiving waters.
  Challenges towards effective monitoring include the transient and random
  nature of the pollution incidents, the scarcity of historical data, the
  complexity of the system, and technological limitations for real-time
  monitoring. We design a SemanTics-aware sEnsor Placement framework, entitled
  STEP, to capture pollution incidents using structural, behavioral, and
  semantic aspects of the infrastructure. We leverage historical data to inform
  our system with new, credible instances of potential anomalies. Several key
  topological and empirical network properties are used in proposing candidate
  deployments which optimize the balance between multiple objectives. We also
  explore the quality of anomaly representation in the network through new
  perspectives, and provide techniques to enhance the realism of the anomalies
  considered in a network. We evaluate STEP on six real-world stormwater
  networks in Southern California, USA, which shows its efficacy in monitoring
  areas of interest over other baseline methods.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Sensor Deployment
  - Stormwater Monitoring
  - Heterogeneous Anomalies
  - Semantics-aware Modeling

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1017/dce.2024.32

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/0DBFE1744220F0A87E954BAE8E721577/S2632673624000327a.pdf/step-toward-a-semantics-aware-framework-for-monitoring-community-scale-infrastructure.pdf
  - type: code
    url: https://github.com/andrewgchio/STEP

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/projects/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - step

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
