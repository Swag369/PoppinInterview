import PartyObject from './PartyObject'
import Party from './Party'
import SearchBar from './SearchBar'
import React, { useState } from 'react';

const randomURL = ["https://fileinfo.com/img/ss/xl/jpg_44.png", "https://img.freepik.com/free-photo/caucasian-beautiful-lady-glasses-smiling-near-3d-printing-machine-her-office-new-technologies-small-businesses-concept-computer-prototypes-table-tech-ambient-jpg-photo_633478-537.jpg?w=1380&t=st=1669581122~exp=1669581722~hmac=fd0b26c82777a6312f354bc6e5b14452aa33ea3c8c4bcf035f6aa2ebdc8c5229", "https://img.freepik.com/free-photo/isolated-book-magazine-composition-dark-surface_125540-1444.jpg?w=1380&t=st=1669581144~exp=1669581744~hmac=8ba7d01aaa113e9f8e87de308ba8e6daeecbfa63d5b7cea4fc662a69b6fd5755", "https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_15976899fbb2cad5800f47d4a27123ee40685c211.png"];

let counter = 1;

let parties = [];


function PartyList(props) {
const [partyDisplay, updatePartyDisplay] = useState([]);
const newParty = () => {
  let name = "party" + counter;
  let image = randomURL[Math.round(Math.random()*3)];
  let price = Math.floor(Math.random()*100);
  let time = Date.now()+Math.random();
  let x = new PartyObject(name, image, price, time);
  parties.push(x);
  updatePartyDisplay([...parties]);
  //not entirely sure why i had to spread parties... but ill figure it out later not huge issue
  counter++;
  console.log(x);
  console.log(parties); //this console.log was one behind for some reason, even though it renders right it says parties is one less that is rendering and/or should be
};
  return (
    <div className = "PartyList.css">
    <br/>
        <SearchBar partyDisplay = {partyDisplay} parties = {parties} updatePartyDisplay = {updatePartyDisplay} />
        <br/>
        <br/>

        <div>
            PARTY LIST
            <br/>
            <hr></hr>
            <br/>
        {//I used br's because it made my life easier, but i would use padding/margin in a real setting
        }
            {partyDisplay.map(party => ( //this works with map, but not with foreach, figure out why
                <Party party={party}/>
              )
            )}
        </div>

        <div>
        <button onClick={newParty}>
            Generate Random Party
        </button>
        </div>
    </div>
  );
}

export default PartyList;