import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'Where is Gamora?',
        content: 'Gamora is with Thanos at Vormir'
    },
    {
        title: 'Who is Gamora?',
        content: 'Gamora is the adopted daugther of Thanos '
    },
    {
        title: 'Why is Gamora?',
        content: 'Because Peter Quill loves her'
    }
]


const options = [
    {
        label: 'The Color Red',
        value: 'red'
    }, 
    {
        label: 'The Color Green',
        value: 'green'
    }, 
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

// const showAccordion = () => {
//     if(window.location.pathname === '/') {
//         return <Accordion items={items}/>
//     }
// }

// const showDropdown = () => {
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown />
//     }
// }

// const showList = () => {
//     if(window.location.pathname === '/list') {
//         return <Search />
//     }
// }

// const showTranslate = () => {
//     if(window.location.pathname === 'translate'){
//         return <Translate />
//     }
// }

export default () => {
     const [selected, setSelected] = useState(options[0]);
   // const [showDropdown, setShowDropdown] = useState(true);
    
	return (
		<div>
            {/* <h1>Widgets App</h1>
           // <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
			{showDropdown ? 
            <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}/> :null
    } */}
        <Header />
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown 
            label="select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
        </div> 
    
	);
};
