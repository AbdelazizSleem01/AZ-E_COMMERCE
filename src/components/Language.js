import Dropdown from 'react-bootstrap/Dropdown';
import '../style/Language.scss'
import egFlag from './img/egypt.png'
import enFlag from './img/united-kingdom.png'

function BasicExample() {
    return (
        <Dropdown className='drop'>
            <Dropdown.Toggle className='Language' variant="success " id="dropdown-basic" >
                <span class="material-symbols-outlined">language</span>       
            </Dropdown.Toggle>
            <Dropdown.Menu className='menu'>
                <Dropdown.Item className='as' href="#/action-1"><img src={egFlag} width={20} /> Arabic</Dropdown.Item>
                <hr style={{width:"145px"}}/>
                <Dropdown.Item className='as'href="#/action-2"> <img src={enFlag } width={20} />  English </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;






