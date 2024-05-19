// 데이터를 정의
var context = {
    title: "Hello, Handlebars!",
    body: "This is a basic Handlebars example.",
    items: ["Item 1", "Item 2", "Item 3","Item 1", "Item 2", "Item 3"]
};

// 템플릿 가져오기
var source = document.getElementById("entry-template").innerHTML;

// 템플릿 컴파일
var template = Handlebars.compile(source);

// 데이터를 템플릿에 바인딩
var html = template(context);

// 결과를 HTML에 삽입
document.getElementById("content").innerHTML = html;
