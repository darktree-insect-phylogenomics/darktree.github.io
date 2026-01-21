---
id: tree
title: Tree placement
sidebar_label: Tree placement
---
# Tree placement

To explore branches in the insect tree with many barcode placements (based on data from the Insect Biome Atlas), hover over or click on the nodes. The child nodes of a given branch are coloured based on the placement counts for the branch by default. To colour the leaves by taxonomy, select another option from the dropdown menu (e.g. order, family, or genus). Use the search function to find species of interest.

The tree may take a moment to load.

<>
  <div
    style={{
      boxSizing: 'content-box',
      position: 'relative',
      width: '105%',
      aspectRatio: '1 / 1',
      paddingBottom: '40px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      boxShadow:
        '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 4px 8px rgba(45, 55, 72, 0.1)',
      overflow: 'hidden',
    }}
  >
    <button
      onClick={() => window.open('https://insect-darktree.github.io/backbone/taxonium.html', '_blank', 'width=1400,height=900,menubar=no,toolbar=no,location=no,status=no')}
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 10,
        padding: '8px 8px',
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#f7fafc'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
    >
      🗗 Open in New Window
    </button>
    <iframe
      src="https://insect-darktree.github.io/backbone/taxonium.html"
      frameborder="0"
      scrolling="yes"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    ></iframe>
  </div>
</>
