

//封装一个nodemailer 二次封装
const nodemailer = require("nodemailer");

function email(obj){

    let testAccount =  nodemailer.createTestAccount();


    let transporter = nodemailer.createTransport({//-->发送方的信息
      host: "smtp.qq.com",//-->邮箱IP地址  在node-modules/nodemailer/lib/well-knowm/services.json 查找对应的接口
      port: 465,//邮箱服务器的端口号    在node-modules/nodemailer/lib/well-knowm/services.json 查找对应的接口
      secure: true, // true for 465, false for other ports  在node-modules/nodemailer/lib/well-knowm/services.json 查找对应的接口
      auth: {
        user: '3077607691@qq.com', // 发送方的邮箱
        pass: 'fwfmkgxejbfodeja' // generated ethereal password //QQ邮箱/设置/账号/生成授权码的验证码
      }
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({//-->接收方的信息
      from: '"Fred Foo 👻" <3077607691@qq.com>', // 发送方的邮箱
      to:obj.yourEmail, // 接收者的邮箱
      subject:obj.title, // 发送的标题
      text:obj.text, // 发送文本
      html:obj.htmltext, // 发送带标签的文本
    });
  
  
  
  nodemailer.getTestMessageUrl(info)//发送成功调用
}

 exports.email=email

