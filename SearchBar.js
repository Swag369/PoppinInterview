import React, {useState} from 'react'


const SearchBar = (props) => {

    let parties = props.parties;
    let partyDisplay = props.partyDisplay;
    let updatePartyDisplay = props.updatePartyDisplay;

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    
        if (searchInput.length > 0) {
            updatePartyDisplay(
                parties.filter((party) => {
                    return party.name.match(searchInput);
                })
            );
            //this is currently lagging 1 keystroke behind, i'm not sure why tbh, i'll try to fix but i misread the email and thought i had till 5 pm PSt so i might not get to this
        }
    
    };

    return(
        <div>
            <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
        </div>
    )

};

export default SearchBar;
