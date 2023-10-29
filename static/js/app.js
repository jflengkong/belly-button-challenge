// Create a constant for url provided for samples.json
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch JSON data 
d3.json(url).then(function(data) {

    // Create variables for overall data 
    let samples = data.samples;
    let metadata = data.metadata;
    let id = data.names;

    // Create a function to make bar chart 
    function makeBarChart(selectedID) {

        // Create variables sample_values, otu_ids & otu_labels 
        let sample_values = samples[selectedID].sample_values;
        let otu_ids = samples[selectedID].otu_ids;
        let otu_labels = samples[selectedID].otu_labels;

        // Create components of the bar chart 
        let trace1 = {
            x: sample_values.slice(0, 10),
            y: otu_ids.slice(0, 10).map(id => `OTU ${id}`), // Label OTU IDs
            text: otu_labels,
            type: 'bar',
            orientation: 'h', 
            transforms: [{
                type: 'sort', 
                target: 'y', 
                order: 'descending'}]
             // Horizontal bar chart
        };

        // Make bar components into a list of lists 
        let data = [trace1];

        // Create layout variable 
        let layout = {
            title: "Top OTUs found in each individual"
        };

        // Plot chart through Plotly 
        Plotly.newPlot("bar", data, layout);
    }

    // Make a function to make a bubble chart 
    function makeBubbleChart(selectedID) {
        let sample_values = samples[selectedID].sample_values;
        let otu_ids = samples[selectedID].otu_ids;
        let otu_labels = samples[selectedID].otu_labels;

        // Create components of the bar chart  
        let trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                color: otu_ids, 
                size: sample_values,
                colorscale: 'Portland'}
            }
        
            // Make bar components into a list of lists 
            let data = [trace]; 

            // Create layout variable   
            let layout = {
                title: "Sample values per OTU ID",
                xaxis: {title:`OTU ID`},
                yaxis: {title: 'Sample Values'}
            };

            // Plot the bubble chart with created components 
            Plotly.newPlot('bubble', data, layout)
        }
    
    // Make a function for the metadata 
    function makeMetadata(selectedID, metadata) {
        // Clear the existing content in the sample-metadata div
        d3.select("#sample-metadata").html("");
    
        // Use D3.js to select the sample-metadata div and append a new panel-body div
        let panelBody = d3.select("#sample-metadata").append("div")
            .attr("class", "panel-body");

        let fields = ["id", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"];
    
        // Add metadata information to the panel-body
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            panelBody.append("p").style("font-size", "10px").text(`${field}: ${metadata[selectedID][field]}`);
        };

    }
    
    // Create a function to make the Belly Button Gauge 
    function makeGaugeBar(selectedID){

        // Create variable for washing frequency 
        let washingFrequency = metadata[selectedID].wfreq

        // Components of Gauge bar 
        let data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: washingFrequency,
                title: { text: "Belly Button Washing Frequency" },
                type: "indicator",
                mode: "gauge+number",
                text: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                direction: 'clockwise',
                textinfo: 'text',
                textposition: 'inside',
                marker: {
                    colors: ['', '', '', '', '', '', '', '', 'white'],
                    labels: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
                    hoverinfo: 'label'
                },
                gauge: {
                    axis: {
                        range: [0, 9],
                        tickmode: "linear"
                    },
                    steps: [
                        { range: [0, 1], color: "#fafa6e", name: "0-1" },
                        { range: [1, 2], color: "#dff06a" },
                        { range: [2, 3], color: "#c6e566" },
                        { range: [3, 4], color: "#adda64" },
                        { range: [4, 5], color: "#94ce62" },
                        { range: [5, 6], color: "#7cc361" },
                        { range: [6, 7], color: "#64b760" },
                        { range: [7, 8], color: "#4cab5f" },
                        { range: [8, 9], color: "#319e5e" }
                    ]
                }
            }
        ];
        
        // Layout for gauge 
        let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);
    }
    // Create function to initiate all functions except bubble chart 
    function optionChanged(selectedID) {
        makeBarChart(selectedID);
        makeMetadata(selectedID, metadata);
        makeGaugeBar(selectedID);
    }

    // Create a dropdown with options
    let dropdown = d3.select('#selDataset');

    // Loop through id and add value to dropdown option
    for (let i = 0; i < id.length; i++) {
        let option = dropdown.append('option');
        option.attr('value', i).text(id[i]);
    }

    // Set an event listener to call the optionChanged function when the dropdown selection changes
    dropdown.on('change', function() {
        let selectedID = +this.value; // Get the selected value as a number
        optionChanged(selectedID);
    });

    // Initially, create the bubble chart and other data to display with the first ID as default
    optionChanged(0)
    makeBubbleChart(0);
    }
);
