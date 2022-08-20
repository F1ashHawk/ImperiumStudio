<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'mail.imperium-studio.ro';
    $mail->Username = 'contact@imperium-studio.ro';
    $mail->Password = '[pFeY]oR?UI~';
    $mail->Subject = 'Test';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    
    $mail->setFrom('contact@imperium-studio.ro');
    $mail->addAddress('form@imperium-studio.ro');
    $mail->Subject = 'Анкета с imperium';
    
    if(!empty($_POST)){
        if(!empty($_POST['visa'])){
        $visa = "no";
        }else{
        $visa = "yes";
        }
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
    $body .= '<p><strong>Whatsapp</strong> '.$_POST['whatsapp'].'</p>';
    $body .= '<p><strong>Telegram</strong> '.$_POST['telegram'].'</p>';

    $mail->Body = $body;
    if(!$mail->send()){
        $message ='Error!!!';
    }else{
        $message = 'The questionnaire has been sent';
    }
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
   ?> 