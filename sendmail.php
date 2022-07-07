<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    $mail->setFrom('contact@imperium-studio.ro', 'IMPERIUM');
    $mail->addAddress('1nik2121@gmail.com');
    $mail->Subject = 'Заявка';

    $visa = "Да";
    if($_POST['visa'] == 'no'){
        $visa = 'Нет';
    }

    $english = 'Плохо';
    if($_POST['lvl-eng'] == 'middle'){
        $english = 'Средне';
    }
    if($_POST['lvl-eng'] == 'good'){
        $english ='Отлично';
    }
    

    $body = '<h1>Заявка с сайта</h1>';
    $body .= '<p><strong>Возраст</strong> '.$_POST['old']. '</p>';
    $body .= '<p><strong>Гражданство</strong> '.$_POST['citizenship'].'</p>';
    $body .= '<p><strong>Наличие визы</strong> '.$_POST['visa'].'</p>';
    $body .= '<p><strong>Уровень английского</strong> '.$english.'</p>';
    $body .= '<p><strong>Имя</strong> '.$_POST['name'].'</p>';
    if(trim(!empty($_POST['whatsapp']))){
        $body .= '<p><strong>Whatsapp</strong> '.$_POST['whatsapp'].'</p>';
    }
    if(trim(!empty($_POST['whatsapp']))){
        $body .= '<p><strong>Telegram</strong> '.$_POST['telegram'].'</p>';
    }

    $mail-> $body;

    if(!$mail->send()){
        $message ='Ошибка';
    }else{
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
   ?> 