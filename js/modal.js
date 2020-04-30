$(function(){
  const callMeBtn = $('#call-me'),
    callMe = $('#modal-callme'),
    kitchen = $('#kitchen'),
    showerRoom = $('#shower-room'),
    flat = $('#flat'),
    office = $('#office'),
    newBuild = $('#new-build'),
    close = $('#close');

  function showModal(){
    callMe.fadeIn(100);
    callMe.css('display', 'flex');
  };

  callMeBtn.on('click', ()=> showModal() );
  kitchen.on('click', ()=> showModal() );
  showerRoom.on('click', ()=> showModal() );
  flat.on('click', ()=> showModal() );
  office.on('click', ()=> showModal() );
  newBuild.on('click', ()=> showModal() );


  close.on('click', function(){
    $(this).parent().parent().fadeOut(100);
  });

  

  
});