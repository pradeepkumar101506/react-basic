
const parent = React.createElement("div",{id:"parent"},
    [
   React.createElement("div",{id:"child"},
        [React.createElement("h1",{
            id:"heading",
            name:"headingName",
            className:"my-heading"
        },"Hello World From React"),
        React.createElement("h1",{
            id:"subheading",
            name:"subHeadingName",            
        },"Hello Bro")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{
            id:"heading2",
            name:"headingName2",
            
        },"Hello World 2 From React"),
        React.createElement("h1",{
            id:"subheading2",
            name:"subHeadingName2",            
        },"Hello  2")]
    )
]
)




console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);