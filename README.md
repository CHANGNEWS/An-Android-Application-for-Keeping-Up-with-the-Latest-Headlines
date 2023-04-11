# An-Android-Application-for-Keeping-Up-with-the-Latest-Headlines
Android Developer News APP Project.
A bit overview, it uses newsapi.org API to get news and get JSON data back. Then it is parsed using google's gson library and the requests are sent by Retrofit.

Note: To run the app you have to add NewsAPI.org key. Getting a key would take just few seconds :)


Setup API Key
Visit NewsAPI.org to get your API Key
Copy your API Key from accounts section
Open gradle.properties (Create the file if not exists)
For Linux/Mac: /home/.gradle/gradle.properties
For Windows: C:\Users\<UserName>\.gradle\gradle.properties
Add the following line:
NewsApi_ApiKey="YOUR_API_KEY"



Libraries
Firebase For User Authentication
Google gson For parsing JSON data
Coroutines For manage long-running tasks
Retrofit For sending network requests
Glide Loading and caching images
