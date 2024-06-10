# What is this library for ?
Use this react compatible library to easily add a table with sorting and filtering functionalities to your desktop app

# How to add this library to your react application ? 
To install this library, simply run : 
### `npm install nk-table-component`

# How to use this library to create the table you need ? 

# First
    Import Table component into your project and simply use it like any other React component : 

Page.jsx
//
`import Table from 'nk-table-component'

function Page() {
    return(
        <div>
            <h1>Page Title</h1>
            <Table data={} range={} columns={}/>
        </div>
    )
}
export default Page`
//
## Second
    Give the component the props it needs. As you can see in the example above, there are 3 :

#    - data : the data you want to fill your table with. data must be an array. 
     feel free to use mockData provided at end of document to test the table.  
#    - range : array of offsets used for display and pagination. set it in growing order
#    - columns : columns to use as header. 
     feel free to use mockColumns provided at end of document to test the table.
##     elements of the columns array must have those four keys :
        - scope: same as <th> scope property. accepts either 'col' or 'row'
        - label: the label you want to appear as the header for a column. label must be a string
        - type: type of data given. can be either "string", "date" or "number"
        - dataKey: the key of the data displayed in the column. if we take an item from mockData as an example, dataKey are  "dish", "prepTime", "cookingTime", "ingredients" and "publicationDate".   

# Important notice : you may need to install @fortawesome/free-solid-svg-icons to enable component to work
Below is an example of how you use the Table component : 

Page.jsx
//
import Table from 'nk-table-component'
import { mockData } from 'path/to/mockData
import { mockColumns } from 'path/to/mockColumns
function Page() {
    const range = [2, 4, 10] // depending on the number of lines per page
    return(
        <div>
            <h1>Page Title</h1>
            <Table data={mockData} range={range} columns={mockColumns}/>
        </div>
    )
}
export default Page

Your table is now rendered with your data ! 

# mockData : 
const mockData = [
    {
        dish:"Egg Fried Rice",
        prepTime: 20, 
        cookingTime:15, 
        ingredients:"eggs, rice, ham",
        publicationDate: "2020-01-10"
    },

    {
        dish:"Roasted pork belly",
        prepTime: 20, 
        cookingTime:150, 
        ingredients:"pork",
        publicationDate: "2020-03-10"
    },
    {
        dish:"Katsu Don",
        prepTime: 40, 
        cookingTime:25, 
        ingredients:"pork, rice",
        publicationDate: "2022-06-02"
    },
    {
        dish:"oinion soup",
        prepTime: 30, 
        cookingTime:120, 
        ingredients:"oinions, water",
        publicationDate: "2023-10-26"
    },
    {
        dish:"cream pasta",
        prepTime: 10, 
        cookingTime:10, 
        ingredients:"pasta, cream",
        publicationDate: "2010-01-10"
    },
    {
        dish:"chocolate cake",
        prepTime: 15, 
        cookingTime:15, 
        ingredients:"chocolate, flour, eggs,  ",
        publicationDate: "2017-12-17"
    },
    {
        dish:"pepperoni pizza",
        prepTime: 40, 
        cookingTime:40, 
        ingredients:"flour, tomato, peperoni",
        publicationDate: "2011-07-11"
    },
    {
        dish:"fried chicken",
        prepTime: 40, 
        cookingTime:20, 
        ingredients:"chicken, oil",
        publicationDate: "2024-02-12"
    },
    
]

# mockColumns :
const mockColumns = [
    {
        scope: 'col',
        label: 'Dish',
        type: 'string',
        dataKey: 'dish'
    },

    {
        scope: 'col',
        label: 'Prep Time',
        type: 'number',
        dataKey: 'prepTime'
    },

    {
        scope: 'col',
        label: 'Cooking Time',
        type: 'number',
        dataKey: 'cookingTime'
    },

    {
        scope: 'col',
        label: 'Ingredients',
        type: 'string',
        dataKey: 'ingredients'
    },
     
    {
        scope: 'col',
        label: 'Publication Date',
        type: 'date',
        dataKey: 'publicationDate'
    }
]

