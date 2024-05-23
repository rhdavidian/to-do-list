import { addProject, deleteProject } from "./addDelete";
import { render } from './render';
import { submit } from './submitEdit';
import './style.css';
import { openModal, closeModal, openModalDetails, closeModalDetails } from "./modalOpenClose";

addProject('Laundry', 'Wash, dry, fold');
addProject('Clean car', 'Throw out junk and vacuum the floor mats');
addProject('Dishes', 'Unload clean dishes, reload dishwasher, run it');
render();

// commented-out variables means they're not needed here; keeping for time 'in case'

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
// don't delete projects const
const projects = document.getElementById('navList');

projects.addEventListener('click', openModalDetails);

openModal();
closeModal();
closeModalDetails();
submit();