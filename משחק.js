var tor = 1; // ����� ����� �� ����
var rows = +prompt("enter rows") //����� ����� �� ���� ������ �"� ������
var cols = +prompt("enter cols")//���� ������
function addbutton() {

    var s = "";//����� ������� ���� ������
    var idnum = 0;//����� ��  id �� �� �����
    for (var r = 0; r < rows; r++) { //���� ���� ������ ����� ����
        for (var i = 0; i < cols; i++) {//���� ���� ������� �����
            if (i % 2 + r % 2 == 1)
                s = s + "<button id='" + idnum.toString() + "'onclick='Buttonclk(this);' style='background-color:green; width:35px; height:44px'>";
            //�� ����� � ������ �� ������ �� ��-������ ����� �� ���� �� ��� ������ ������� ���� ���
            //������ �������� FFF ����� �� � ID �� ������ ����� ������ �����
            else
                s = s + "<button id='" + idnum.toString() + "'onclick='Buttonclk(this);' style='background-color:blue; width:35px; height:44px'>";
            //�� �� �� ������ �� ��-������ ������ ���� ���� ��� �� ��� ���� ��� ����
            s = s + idnum.toString();//�id �� �� ����� ���� ����
            s = s + "</button>";//���� �� ������
            idnum++;//� id ��� ����� ������ ���
        }
        s += "</br >";//���� �� ����-������ ����
    }

    document.getElementById("1").innerHTML = s;//������ s���� �HTML ���� �� � id ��� ��� 1
}
function Buttonclk(t) {
    var amuda = t.id % cols;//���� �� ����� ������ ����� �"� ����� ���� ������ ������ ������ ���
    //���� ������ ������
    var shura = Math.floor(t.id / cols);//����� �� ���� ������ (���� ������ ���� ���� �������� �����
    //   alert(t.id % cols)
    //       alert(Math.floor(t.id / cols))
    if (t.style.backgroundColor == "green" || t.style.backgroundColor == "blue") {
        //����� ������� ����� ���� ������ ����� �� ���� ����
        tor++//���� ����
        if (tor % 2 == 0)
            t.style.backgroundColor = "gold";//������ �� ���� �� ���� 1 ���� �� ������ ����
        else
            t.style.backgroundColor = "purple"//�� ���� �� ���� 2 ���� �����
        if (checkrow(shura) == 1 || checkcol(amuda) == 1)
            alert("it's a win");
    }
}
function checkrow(row) {
    var i = 1;//����� ������ �����.
    var idF = row * cols;//����� ������ �����
    var colorF = document.getElementById(idF).style.backgroundColor;//��� ����� ������
    while (i < cols) {//���� ������ ����� �� ���
        var id = row * cols + i;//����� ��� ��� ����� �� �Id �� ������
        if (document.getElementById(id).style.backgroundColor !=
            colorF)//���� �� ��� ������ ������ ���� ���� ������ ���(���� ��� ���)
            return 0;//����� ���-����� 0 (��� ������)
        i++;//����� ������ ���� ����� ������ ���� ������ ���
    }
    return 1//�� ��� �� ������-�� ������ ����� 1
}
function checkcol(col) {//�������� ����� �� ���� ������ �����
    var shura = 1;//����� ���� �����
    var colorfirst = document.getElementById(col).style.backgroundColor;//���� ������ ����
    while (shura < rows) {//�� ��� ����� �� ����� ����� ������
        var id = col + (cols * shura)
        if (document.getElementById(id).style.backgroundColor != colorfirst)
            return 0;//��� �������-��� ������
        shura++;// �� ��� ���� ���� ������ ������ ����� ����� ���� �� ��� ����
    }
    return 1;//����� ��� ���� ���� ������� �� ������ 0 ���� ��� ������-������ 1
}
