---
title: "LOCATER: Cleaning WiFi Connectivity Datasets for Semantic Localization"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Yiming Lin
  - Daokun Jiang
  - Roberto Yus
  - Georgios Bouloukakis
  - me
  - Sharad Mehrotra
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2020-11-01"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-11-02"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "Proceedings of the VLDB Endowment"
  short_name: "PVLDB"
  volume: 14
  issue: 3

peer_reviewed: true
open_access: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. 
funding:
  - funder: "DARPA TIPPERS"

abstract: |-
  This paper explores the data cleaning challenges that arise in using WiFi
  connectivity data to locate users to semantic indoor locations such as
  buildings, regions, rooms. WiFi connectivity data consists of sporadic
  connections between devices and nearby WiFi access points (APs), each of
  which may cover a relatively large area within a building. Our system,
  entitled semantic LOCATion cleanER (LOCATER), postulates semantic
  localization as a series of data cleaning tasks - first, it treats the problem
  of determining the AP to which a device is connected between any two of its
  connection events as a missing value detection and repair problem. It then
  associates the device with the semantic subregion (e.g., a conference room in
  the region) by postulating it as a location disambiguation problem. LOCATER
  uses a bootstrapping semi-supervised learning method for coarse localization
  and a probabilistic method to achieve finer localization. The paper shows that
  LOCATER can achieve significantly high accuracy at both the coarse and fine
  levels.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Data Cleaning
  - Semantic Localization
  - WiFi Connectivity

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.14778/3430915.3430923

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: http://vldb.org/pvldb/vol14/p329-lin.pdf
  - type: code
    url: https://github.com/yiminl18/LOCATER
  # - type: slides
  #   url: https://drive.google.com/file/d/1bNmjcx0YQe_7p-2V6_NoiSlcQiMx08Ud/view
  - type: video
    url: https://www.youtube.com/watch?v=0PqmHTkI_Aw

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
projects: ['tippers']

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
