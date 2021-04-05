---
title: Drawing with Data
date: "2010-06-21"
thumbnail: ./DataDrawing_newsletter.jpg
description_alt:
description: Season's greetings card reflecting population size and density on a world map using unique snowflakes coded in Javascript.
Client: ETH Singapore SEC Ltd
Published: 2015 and 2016
---

The [Singapore-ETH Centre](https://sec.ethz.ch/) comprises research programs that address the challenges of modern societies worldwide, in urban environments and beyond.

For the season's greetings card, I created a visual concept that connects the scientific theme with the festive occasion: each country is represented by a snowflake. The resulting world map is a visualisation of UN-data, scraped from <a href="https://www.worldometers.info/world-population/population-by-country/">Worldometers.</a> The population size corresponds to the size of the snowflake.

The infographic is coded in [D3](https://d3js.org/), snowflake logic by Sergio Ordóñez. Using random parameters for the snowflakes, every single one is unique.

<div class="kg-nopointer">

![Data drawing urbanisation different versions](./DataDrawing_urbanisation.gif)

</div>

Each year, different data is used. For the first edition, the hue is determined by the percentage of the urban population - the lighter the color, the more urban the country.

<div class="kg-card kg-image-card kg-width-wide kg-nopointer">

![Data drawing world map density](./DataDrawing_density.jpg)

</div>

For the second edition, hue reflects population density – the lighter the color, the denser the country. And below an example with hue reflecting fertility rate, darker snowflakes represent less children.

<div class="kg-card kg-image-card kg-width-wide kg-nopointer">

![Data drawing world map fertility rate](./DataDrawing_fertility.jpg)

</div>
