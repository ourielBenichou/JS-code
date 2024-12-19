var tor = 1; // משתנה שמסמל את התור
var rows = +prompt("enter rows") //משתנה שקובע את מספר השורות ע"פ המשתמש
var cols = +prompt("enter cols")//מספר עמודות
function addbutton() {

    var s = "";//משתנה שיתווסף לקוד המקורי
    var idnum = 0;//משתנה של  id של כל כפתור
    for (var r = 0; r < rows; r++) { //למשך מספר השורות שהוזן קודם
        for (var i = 0; i < cols; i++) {//למשך מספר העמודות שהוזן
            if (i % 2 + r % 2 == 1)
                s = s + "<button id='" + idnum.toString() + "'onclick='Buttonclk(this);' style='background-color:green; width:35px; height:44px'>";
            //אם השורה ו העמודה לא זוגיים או אי-זוגיים שניהם זה קובע את צבע הכפתור שיתווסף בצבע אחד
            //בלחיצה פונקצייה FFF מציבה את ה ID של הכפתור הנלחץ ופועלת בהתאם
            else
                s = s + "<button id='" + idnum.toString() + "'onclick='Buttonclk(this);' style='background-color:blue; width:35px; height:44px'>";
            //אם הם כן זוגיים או אי-זוגיים הכפתור יהיה בצבע אחר כך שיש צורת לוח שחמט
            s = s + idnum.toString();//הid של כל כפתור נכתב עליו
            s = s + "</button>";//סוגר את הכפתור
            idnum++;//ה id גדל בשביל הכפתור הבא
        }
        s += "</br >";//אחרי כל שורה-יורדים שורה
    }

    document.getElementById("1").innerHTML = s;//המשתנה sמוצב בHTML בחלק שה ה id שלו הוא 1
}
function Buttonclk(t) {
    var amuda = t.id % cols;//מוצא את מיקום הכפתור בשורה ע"י חלוקת מספר הכפתור במספרי הכפתור בכל
    //שורה ומציאת השארית
    var shura = Math.floor(t.id / cols);//השורה בה נמצא הכפתור (מספר הכפתור חלקי מספר הכפתורים בשורה
    //   alert(t.id % cols)
    //       alert(Math.floor(t.id / cols))
    if (t.style.backgroundColor == "green" || t.style.backgroundColor == "blue") {
        //במקרה שהכפתור עדיין בצבע המקורי כלומר לא לחצו עליו
        tor++//עובר התור
        if (tor % 2 == 0)
            t.style.backgroundColor = "gold";//בלחיצה אם התור של שחקן 1 תשנה את הכפתור לזהב
        else
            t.style.backgroundColor = "purple"//אם התור של שחקן 2 תשנה לסגול
        if (checkrow(shura) == 1 || checkcol(amuda) == 1)
            alert("it's a win");
    }
}
function checkrow(row) {
    var i = 1;//מיקום הכפתור בשורה.
    var idF = row * cols;//האיבר הראשון בשורה
    var colorF = document.getElementById(idF).style.backgroundColor;//צבע האיבר הראשון
    while (i < cols) {//בודק שמיקום האיבר לא חרג
        var id = row * cols + i;//משתנה בכל פעם שמציג את הId של הכפתור
        if (document.getElementById(id).style.backgroundColor !=
            colorF)//בודק אם צבע הכפתור הראשון שווה לצבע הכפתור הבא(שגדל בכל פעם)
            return 0;//במקרה ולא-מחזיר 0 (אין ניצחון)
        i++;//במקרה שעדיין יכול להיות ניצחון עובר לכפתור הבא
    }
    return 1//עם גמר את הלולאה-יש ניצחון מחזיר 1
}
function checkcol(col) {//פונקצייה מקבלת את מספר הכפתור בשורה
    var shura = 1;//השורה שהיא תבדוק
    var colorfirst = document.getElementById(col).style.backgroundColor;//הצבע בתחילת הטור
    while (shura < rows) {//כל עוד השורה לא חורגת ממספר השורות
        var id = col + (cols * shura)
        if (document.getElementById(id).style.backgroundColor != colorfirst)
            return 0;//תצא מהלולאה-אין ניצחון
        shura++;// אם הוא שווה יכול ללהיות ניצחון תעבור לשורה הבאה עד סוף הטור
    }
    return 1;//במקרה שכל הטור נבדק והלולאה לא החזירה 0 משמע שיש ניצחון-להחזיר 1
}
