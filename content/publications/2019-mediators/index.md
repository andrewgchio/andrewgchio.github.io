---
title: "Adaptive Mediation for Data Exchange in IoT Systems"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Georgios Bouloukakis
  - Cheng-Hsin Hsu
  - Sharad Mehrotra
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2019-12-09"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-12-10"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "18th Workshop on Adaptive and Reflexive Middleware"
  short_name: "ARM"
peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. 
funding:
  - funder: "DARPA TIPPERS"

abstract: |-
  Messaging and communication is a critical aspect of next generation
  Internet-of-Things (IoT) systems where interactions among devices, software
  systems/services and end-users is the expected mode of operation. Given the
  diverse and changing communication needs of entities, the data exchange
  interactions may assume different protocols (MQTT, CoAP, HTTP) and
  interaction paradigms (point to point, multicast, unicast). In this paper, we
  address the issue of supporting adaptive communications in IoT systems
  through a mediation-based architecture for data exchange. Here, components
  called mediators support protocol translation to bridge the heterogeneity
  gap. Aiming to provide a placement of mediators to nodes, we introduce an
  integer linear programming solution that takes as input: a set of Edge nodes,
  IoT devices, and networking semantics. Our proposed solution achieves
  adaptive placement resulting in timely interactions between IoT devices for
  larger topologies of IoT spaces.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Heterogenous (Hybrid) systems
  - Performance
  - Sensor applications and deployments
  - Message-oriented middleware

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1145/3366612.3368122

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: mediator-paper.pdf
  - type: slides
    url: mediator-slides.pdf

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
projects: ["DARPA TIPPERS"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
