# An-Android-Application-for-Keeping-Up-with-the-Latest-Headlines


A bit overview, it uses newsapi.org API to get news and get JSON data back. Then it is parsed using google's gson library and the requests are sent by Retrofit.

Note: To run the app you have to add https://newsapi.org key. I have taken this step to due to limited access to daily request for News. Getting a key would take just few seconds :)

Setup API Key:
                   1)Visit (https://newsapi.org) to get your API Key
                   2)Copy your API Key from accounts section
                   3)Open gradle.properties (Create the file if not exists)
                            *)For Linux/Mac: /home/.gradle/gradle.properties
                            *)For Windows: C:\Users\<UserName>\.gradle\gradle.properties
                            *)Add the following line:
                                  NewsApi_ApiKey="YOUR_API_KEY"
                                  
Demo video link:
     link: https://github.com/CHANGNEWS/An-Android-Application-for-Keeping-Up-with-the-Latest-Headlines/blob/main/Project%20demo.mp4
Source code:
      link:
