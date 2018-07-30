# themes

for blockcert

## Backend

Fisrt, ssh into your remote server.

### Run Flask App as a background process

1. Make sure your present working directory is `cert-viewer`

2. Enable virtual environment

    ```bash
    source ./venv/bin/activate
    ```
    
3. If you wish to disable it

    ```bash
    deactivate
    ```
    
4. To run the app as a background process (keep running after the terminal is closed)

    ```bash
    nohup python run.py &
    ```
    
5. You can check if the app is still running by

    ```bash
    fuser 5000/tcp
    ```
    
    Change `5000` to the port number of your app. It should return the pid of the process running on port 5000.

### Stop a background process

1. In your terminal, simply do

    ```bash
    fuser -k 5000/tcp
    ```
    
    Change `5000` to the port number of your app
    
## Frontend

需要更改的文件主要是以下三个地方：

`cert-viewer/cert_viewer/templates` 所有页面的架构

`cert-viewer/cert_viewer/themes/default/` 目前网页使用的主题

`cert-viewer/conf_local.ini` app的设定和一些公司的讯息，如email

### Change Company Logo

1. 由于 `theme_static()` 会在 `cert-viewer/cert_viewer/themes/default/static` 里搜寻参数路径。所以新图片的位置建议放在 `cert-viewer/cert_viewer/themes/default/static/img` 下

2. 打开 `cert-viewer/cert_viewer/templates/layout.html`, 大约在line 37 的地方将 `theme_static(‘’)` 中的参数更改为新图片位置

### Change Navigation bar color

1. 打开 `cert-viewer/cert_viewer/templates/layout.html` , line 33-40是Navigation bar 相关的code

2. 大约在line35的地方，将 `background-color`的值更改为您要的颜色

### Change footer style

1. 打开 `cert-viewer/cert_viewer/templates/layout.html`, line 54 - 63定义了footer的外形

2. 目前footer使用的class是由 `agency.min.css` 提供的 `bg-darkest-gray`

3. ISSUER_EMAIL是您在`cert-viewer/conf_local.ini` 里设置的email

### 主页

代码文件位置：`cert-viewer/cert_viewer/templates/index.html`。

背景动画：line 9 - 179

标题(Certchain)：line 188

证书范例链接：line 185 - 195

证书json文件位置：`cert-veiwer/cert_data`文件夹下

### 证书页面

代码文件位置：`cert-viewer/cert_viewer/themes/default/templates/award.html`

Verify Certificate 按钮：line17 - 58

链接api后返回认证结果的脚本：`cert-viewer/cert_viewer/themes/default/static/js/verification.js`

按钮动画的脚本：`cert-viewer/cert_viewer/themes/default/static/js/uiProgressButton.js`

### FAQ页面

代码文件位置：`cert-viewer/cert_viewer/templates/faq.html`