$(function(){
  function buildHTML(data){
    if ( data.image ) {
      var html =
      `<div class = "messages">
          <div class = "info">
            <p class = "userName">
              ${data.user_name}
            </p>
            <p class = "timeStamp">
              ${data.created_at}
            </p>
          </div>
          <div class = "message">
            <p class = "message__content">
              ${data.content}
            </p>
          </div>
          <img src = ${data.image} >
        </div>`
      return message;
    } else {
      var html =
      `<div class = "messages">
        <div class = "info">
          <p class = "userName">
            ${data.user_name}
          </p>
          <p class = "timeStamp">
            ${data.created_at}
          </p>
        </div>
        <div class = "message">
          <p class = "message__content">
            ${data.content}
          </p>
        </div>
      </div>`
      return html; 
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html =buildHTML(data);
    })
  });
})