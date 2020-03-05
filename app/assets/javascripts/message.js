$(function(){

  var buildHTML = function(message) {
    var data = `<div class = "messages" data-message-id=${message.id} >`
    

    if (message.content && message.image) {
        var html = `   ${data} 
                        <div class = "info">
                          <p class = "userName">
                            ${message.user_name}
                          </p>
                          <p class = "timeStamp">
                            ${message.created_at}
                          </p>
                        </div>
                        <div class = "message">
                          <p class = "message__content">
                            ${message.content}
                          </p>
                        </div>
                      <img src = ${message.image} "class = "message__image" >
                    </div>`
    } else if (message.content) {
          var html =` ${data}
                        <div class = "info">
                          <p class = "userName">
                            ${message.user_name}
                          </p>
                          <p class = "timeStamp">
                            ${message.created_at}
                          </p>
                        </div>
                        <div class = "message">
                          <p class = "message__content">
                            ${message.content}
                          </p>
                        </div>
                      </div>`
    } else if (message.image) {
      var html = ` ${data} 
                    <div class = "info">
                      <p class = "userName">
                        ${message.user_name}
                      </p>
                      <p class = "timeStamp">
                        ${message.created_at}
                      </p>
                    </div>
                    <img src = ${message.image} "class = "message__image" >
                  </div>`
    }
      return html
  };

  var reloadMessages = function() {
    
    var last_message_id = $('.messages:last').data("message-id")
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    
    
    .done(function(message) {
      console.log(message)
      if (message.length !==0) {
        var insertHTML = ''
        $.each(message, function(i, message) {
          insertHTML += buildHTML(message)
        })
        $('.body').append(insertHTML)
        $('.body').animate({ scrollTop: $('.body')[0].scrollHeight})
      }
    })
    .fail(function() {
      alert('このエラーです');
    });
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
      $('.body').append(html);
      $('.body').animate({ scrollTop: $('.body')[0].scrollHeight});
      $('form')[0].reset();
      $('.sendBox').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.sendBox').prop('disabled', false);
    })
  })

  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
        setInterval(reloadMessages, 5000);
  }
})
