---
title: "BatchIT: Intelligent and Efficient Batching for IoT Workloads at the Edge"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Guoxi Wang
  - Ryan Hildebrandt
  - me
  - Nalini Venkatasubramanian
  - Sharad Mehrotra

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2024-05-10"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-05-11"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "IEEE/IFIP Network Operations and Management Symposium"
  short_name: "IEEE NOMS"
peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "DARPA TIPPERS"

abstract: |-
  Next-generation stream processing systems for community scale IoT applications
  must handle complex non-functional needs, e.g. scalability of input,
  reliability/timeliness of communication and privacy/security of captured
  data. In many IoT settings, efficiently batching complex workflows remains
  challenging in resource-constrained environments. High data rates, combined
  with real-time processing needs for applications, have pointed to the need
  for efficient edge stream processing techniques. In this work, we focus on
  designing scalable edge stream processing workflows in real-world IoT
  deployments where performance and privacy are key concerns. Initial efforts
  have revealed that privacy policy execution/enforcement at the edge for
  intensive workloads is prohibitively expensive. Thus, we leverage intelligent
  batching techniques to enhance the performance and throughput of streaming in
  IoT smart spaces. We introduce BatchIT, a processing middleware based on a
  smart batching strategy that optimizes the trade-off between batching delay
  and the end-to-end delay requirements of IoT applications. Through
  experiments with a deployed system we demonstrate that BatchIT outperforms
  several approaches, including micro-batching and EdgeWise, while reducing
  computation overhead.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Edge computing
  - Stream processing
  - Privacy

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1109/NOMS59830.2024.10575298

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: BatchIT-paper.pdf

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
  - tippers

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
