---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

sections:
  - block: my-resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
      headings:
        about: 'Biography'
        education: 'Education'
        interests: 'Interests'
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: false

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
      
      biography:
        style: "max-width: 80ch;"

  - block: my-resume-experience
    id: experience
    content:
      username: me
      title: Professional Experience
    design:
      date_format: Jan 2006


  - block: my-resume-awards
    id: awards
    content:
      username: me
      title: Awards
      text: ''
    design:
      date_format: Jan 2006


  - block: my-collection
    id: publications
    content:
      title: Recent Publications
      filters:
        folders:
          - publications
        # NOTE: `featured_only` must sit INSIDE `filters:` to take effect.
        # Left off so this block shows the most recent publications, matching
        # its title. Move it here and set `true` to show only `featured: true`.
      count: 4
      sort_by: Date
      order: desc
      archive:
        enable: true
        text: See all publications
    design:
      view: citation

  - block: my-news
    id: news
    content:
      title: In the News
      # One page per article in content/news/
      filters:
        folders:
          - news
      count: 5
    design:
      date_format: Jan 2006

  - block: my-resume-experience
    id: teaching
    content:
      username: me
      key: teaching
      title: Teaching Experience
    design:
      date_format: Jan 2006

  - block: my-contact
    id: contact
    content:
      title: Contact
      # Email and the "Elsewhere" links come from data/authors/me.yaml.
      # Set `email:` here to override the profile's mailto: link.
      email: achio@lanl.gov
      address:
        lines:
          - TA-3 Building 1690, Room 134
          - Los Alamos, NM
      phone: ''

---

