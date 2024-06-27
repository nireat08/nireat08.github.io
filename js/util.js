function getCookieValue(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// DB에서 데이터 가져오기
function getData(tableName, queryParams, callbackFunction) {
    $.ajax({
        url: getCookieValue("apiUrl") + '/' + tableName,
        type: 'GET',
        data: queryParams,
        dataType: 'json',
        success: callbackFunction,
        error: function(error) {
            console.error(error.responseJSON);
        }
    });
}

// DB에 데이터 추가(또는 덮어쓰기)
function addData(tableName, queryParams, callbackFunction, isUpdate) {
    $.ajax({
        url: getCookieValue("apiUrl") + '/' + tableName + (isUpdate ? '?rewriteMode=Y' : ''),
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(queryParams),
        dataType: 'json',
        success: callbackFunction,
        error: function(error) {
            console.error(error.responseJSON);
        }
    });
}

// DB에 있는 데이터 삭제
function deleteData(tableName, queryParams, callbackFunction) {
    $.ajax({
        url: getCookieValue("apiUrl") + '/' + tableName,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify(queryParams),
        dataType: 'json',
        success: callbackFunction,
        error: function(error) {
            console.error(error.responseJSON);
        }
    });
}

// DB에 있는 데이터 업데이트 params 에 수정할 row의 'pk_~'값 필수
function updateData(tableName, params, callbackFunction) {
    $.ajax({
        url: getCookieValue("apiUrl") + '/' + tableName,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(params),
        dataType: 'json',
        success: callbackFunction,
        error: function(error) {
            console.error(error.responseJSON);
        }
    });
}

function jsonSort(data, keyName, 내림차순정렬) {
    if (내림차순정렬) {
        return data.sort((a, b) => b[keyName] - a[keyName]);
    } else {
        return data.sort((a, b) => a[keyName] - b[keyName]);
    }
}
