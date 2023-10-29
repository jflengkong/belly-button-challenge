<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://github.com/jflengkong/belly-button-challenge/blob/main/images/bacteria.png">

  <h1 align="center"> 🦠# belly-button-challenge 🦠</h1>

  <p align="center">
    UWA Week 14 Challenge
    <br />
    <a href="http://robdunnlab.com/projects/belly-button-biodiversity"><strong>Explore the .JSON Document»</strong></a>
    <br />
    <br />
    <!--
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
    --> 
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<h2> Table of Contents </h2>
  <li> 
    <a href="#about-the-project">About The Project</a> 
    <ul>
      <a href="#built-with">Built With</a>
    </ul>
   <li>
   <a href="#documents">Documents</a>
   </li> 
   <li> 
      <a href="#part-1-horizontal-bar-chart">Part 1: </a> Horizontal Bar Chart
   </li>
   <li> 
      <a href="#part-2-bubble-chart">Part 2: </a> Bubble Chart 
   </li>
   <li>
      <a href="#part-3-metadata">Part 3: </a> MetaData Information 
    </li>   
    <li>
      <a href="#bonus-part-washing-frequency-gauge">Bonus Part: </a> Belly Button Washing Frequency Gauge 
    </li>
    <li>
      <a href="#references">References</a> 
    </li>
    </li> 


<!-- ABOUT THE PROJECT -->
## About The Project

In this assignment, we are required to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. 

## Documents 

Description of documents included in this repository:

1. `static folder` : includes the completed [`app.json`](https://github.com/jflengkong/belly-button-challenge/blob/main/static/js/app.js)
2. `images folder` : Screenshots of completed [`index.html`](https://github.com/jflengkong/belly-button-challenge/blob/main/index.html)
3. url used for reading `samples.json` file 
   ```sh
   https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
   ```
<!--
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
--> 
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<div align="center">
<b> <h2> The dashboard will include the following parts: </h2> </b> 

<a href="#part-1"> <b> Part 1:</b> </a> Horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

<a href="#part-2"><b> Part 2:</b></a> A bubble chart that displays each sample.

<a href="#part-3"> <b>Part 3:</b></a> Individual's demographic information metadata.

<a href="#bonus-part"><b> Part 4:</b></a> Bonus gauge for Belly Button washing frequency. 🛁 

![Belly Button Dashboard](https://github.com/jflengkong/belly-button-challenge/blob/main/images/dashboard-complete.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
</div>

### Built With 

This project used with plotly.js: 

[![Plotly][plotly.js]][plotlyjs-url]

<!-- --> 
<!--[![Vue][Vue.js]][Vue-url]
[![Angular][Angular.io]][Angular-url]
[![Svelte][Svelte.dev]][Svelte-url]
[![Laravel][Laravel.com]][Laravel-url]
 [![Bootstrap][Bootstrap.com]][Bootstrap-url]
[![JQuery][JQuery.com]][JQuery-url] 
--> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
<!--
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
--> 

<!-- USAGE EXAMPLES -->
## Part 1: Horizontal Bar Chart
<b> Instructions: </b> Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use `sample_values` as the values for the bar chart.

- Use `otu_ids` as the labels for the bar chart.

- Use `otu_labels` as the hovertext for the chart.

Using the Plotly.js we were able to display the Top 10 OTUs found in each individual. A dropdown button will be presented later in the further parts completed. 

![horizontal-plot](https://github.com/jflengkong/belly-button-challenge/blob/main/images/horizontal-plot.gif) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Part 2: Bubble Chart 
<b> Instructions: </b> Create a bubble chart that displays each sample. 

- Use `otu_ids` for the x values.

- Use `sample_values` for the y values.

- Use `sample_values` for the marker size.

- Use `otu_ids` for the marker colors.

- Use `otu_labels` for the text values.

Using the documentation from [Plotly: Bubble Charts ](https://plotly.com/javascript/bubble-charts/), we were able to use the following values and plot a bubble chart for each sample. 

![bubble-chart](https://github.com/jflengkong/belly-button-challenge/blob/main/images/bubble-chart.gif) 

## Part 3: Metadata 
<b> Instructions: </b> Display the sample metadata, i.e., an individual's demographic information:
- `id`
- `ethnicity`
- `gender`
- `age`
- `bbtype`
- `wfrequency` 

Using the metadata we were able to also append the [index.html](https://github.com/jflengkong/belly-button-challenge/blob/main/index.html) code as required to add the information required to be printed in the dashboard according to values presented in each sample acquired from the .json url. 

![metadata-results](https://github.com/jflengkong/belly-button-challenge/blob/main/images/metadata-results%20.gif)

## Bonus Part: Washing Frequency Gauge  
<b> Instructions: </b> Adapt the Gauge Chart from [https://plot.ly/javascript/gauge-charts/](https://plot.ly/javascript/gauge-charts/) to plot the weekly washing frequency of the individual. 

<div align="center">
<b> <h2> Results required: </h2> </b> 

![gauge required](https://github.com/jflengkong/belly-button-challenge/blob/main/images/belly-button-gauge.jpg) 

</div> 

<div align="center">
    
<b> <h2>  Result gained </h2> </b> 
![gauge-acquired](https://github.com/jflengkong/belly-button-challenge/blob/main/images/gauge-got.png) 

There were advanced methods to include the needle gauge, and I was unable to complete the gauge meter labels inside the gauge where required. Further work and analysis of the documentation will be required in the future to adapt this gauge to its most functional basis. Attempts were made to create and "draw" a needle and change the position through html, however there were not able to create the same results as required. Overall, a fun attempt for the bonus part. 

</div> 
<!--
- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
--> 


<!-- CONTRIBUTING -->
<!--
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
--> 


<!-- LICENSE -->
<!--
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
--> 

<!-- CONTACT -->
## Contact

Jesslyn Lengkong - [Linked In](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/jflengkong/belly-button-challenge/tree/main)

<p align="right">(<a href="#readme-top">back to top</a>)</p


<!-- ACKNOWLEDGMENTS -->
## References
[1] Shields - [Data Development Shields](https://github.com/Ileriayo/markdown-badges)

[2] CodePen - [Sort Descending Bar Graph](https://codepen.io/etpinard/pen/YEbWoO?editors=0010 ) 

[3] Plotly - [Bar Chart Color Customisation](https://plotly.com/javascript/bar-charts/?_ga=2.127167949.1186035819.1698331890-746224894.1698331890#customizing-individual-bar-colors)

[4] Plotly- [Plotly: Bubble Charts](https://plotly.com/javascript/bubble-charts/)

[5] Stack Overflow - [Gauge Colour](https://stackoverflow.com/questions/67635512/plotly-colorscale-in-scatter-data-plot)

[6] Colour Designer- [Colour Scale Generator](https://colordesigner.io/gradient-generator)

[7] othneildrew GitHub - [ReadME Template](https://github.com/othneildrew/Best-README-Template#built-with)

[plotly.js]:https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white
[plotlyjs-url]: https://plotly.com/javascript/

<!--
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
--> 


<!-- MARKDOWN LINKS & IMAGES --
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!--
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
--> 
