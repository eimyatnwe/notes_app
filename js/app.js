// UI

const addbtn = document.getElementById('add');

addbtn.addEventListener('click',()=>addnewnote());

function addnewnote(text=''){
	// console.log('hay');

	const note = document.createElement('div');
	note.classList.add('note');
	note.innerHTML = ` 
		<div class="toolbar">

				<button class="save" id="save">Save</button>

				<i class="fas fa-trash-alt"></i>
				<i id="attach" class="fas fa-paperclip attach"></i>

				<div class="imgattach">
					<i id="close" class="fas fa-times"></i>
					<p class="tit">Add file</p>
					<p class="img">Image</p>
					<p class="voi">Voice</p>
				</div>


				<i id="more" class="fas fa-ellipsis-v"></i>

				<div class="buttons">
					<i id="bold" class="fas fa-bold"></i>
					<i id="italic" class="fas fa-italic"></i>
					<i id="underline" class="fas fa-underline"></i>
				</div>

				
				
		</div>

			<p class="head">uncategorized</p>

			<input type="text" name="title" id="title" class="title" placeholder="Title" />

			<div class="main ${text ? '' : 'hidden'}"></div>

			<textarea class="${text ? 'hidden' : ''}"></textarea>

			

	`;

	const savebtn = note.querySelector('.save');
	const deletebtn = note.querySelector('.fa-trash-alt');

	const title = note.querySelector('.title');
	// console.log(title);

	const more = note.querySelector('.fa-ellipsis-v');
	const buttons = note.querySelector('.buttons');
	const bold = note.querySelector('.fa-bold');
	const italic = note.querySelector('.fa-italic');
	const underline = note.querySelector('.fa-underline');

	const attach = note.querySelector('.attach');
	const attachclose = note.querySelector('.fa-times'); 
	const imgattach = note.querySelector('.imgattach');

	const main = note.querySelector('.main');
	const textarea = note.querySelector('textarea');
	
	// console.log(imgattach);

	// console.log(textarea);

	savebtn.addEventListener('click',()=>{

		main.classList.toggle('hidden');

		textarea.classList.toggle('hidden');
	});

	deletebtn.addEventListener('click',()=>{

		note.remove();

		updatelocalstorage();
	});

	main.textContent = text;
	textarea.textContent = text;

	attach.addEventListener('click',()=>{

		imgattach.style.display = 'block';

	});

	attachclose.addEventListener('click',()=>{

		imgattach.style.display = 'none';
	});

	more.addEventListener('click',()=>{

		// console.log('hay');

		buttons.classList.toggle('show');

		more.classList.toggle('show');
		// console.log(buttons);
	});


	bold.addEventListener('click',()=>{
		// console.log('bold');

		bold.classList.toggle('change');

		if(bold.classList.contains('change')){

			textarea.style.fontWeight = 'bold';
			main.style.fontWeight = 'bold';

		}else{

			textarea.style.fontWeight = '';
			main.style.fontWeight = '';
		}



	});

	italic.addEventListener('click',()=>{

		italic.classList.toggle('change');

		if(italic.classList.contains('change')){

			textarea.style.fontStyle = 'italic';
			main.style.fontStyle = 'italic';


		}else{

			textarea.style.fontStyle = '';
			main.style.fontStyle = '';

		}
		
	});


	underline.addEventListener('click',()=>{

		underline.classList.toggle('change');

		if(underline.classList.contains('change')){

			textarea.style.textDecoration = 'underline';
			main.style.textDecoration = 'underline';

		}else{

			textarea.style.textDecoration = '';
			main.style.textDecoration = '';
		}
	});

	// console.log(note);

	textarea.addEventListener('keyup',(e)=>{

		// console.log(e.target.value);

		const {value} = e.target;
		main.textContent = value;

		updatelocalstorage();
	});

	


	document.body.appendChild(note);
}

function updatelocalstorage(){

	const notetexts = document.querySelectorAll('textarea');

	let notes = [];

	notetexts.forEach(notetext=>notes.push(notetext.value));
	

	localStorage.setItem('notes',JSON.stringify(notes));


}

const getnotes = JSON.parse(localStorage.getItem('notes'));


if(getnotes){
	getnotes.forEach(getnote=>addnewnote(getnote));
}





