const path = require('path') //es5  - but babel can read const but not import etc
const rules = [
    {   //array of objects
        test: /\.tsx?/, // all the files in this format
        exclude: /node_modules/, //apart from node modules
        loader: 'babel-loader' //use babel-loader to load it
    }

]

module.exports = {
    //essentially saying 'export' in react but webpack is read by node and node reads JS ES5 
    target: 'web', //target to export our code 
    mode: 'development', //what mode it will be, development, production,etc
    entry: './src/index.tsx', //entry is where the main js will be in /coming from
    output: {
        //name of the output file--must correspond with the script=src tag in index.html
        path: path.resolve(__dirname, 'build'), //directory name , name u want to call the file, once we built up the code, it's going to create a new folder in our root directory called build and put all the complied code in to it.
        // build will build in our path:path.resolve(_dirname,'build')
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: {
        contentBase: './', //get content from root
        port: 3000 //export to port 3000
    }
    // omits the file types when we import something, that way when we import files to our tsx, we dont have to specify these file types

}

