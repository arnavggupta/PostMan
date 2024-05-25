#include<bits/stdc++.h>
using namespace std;
int main(){
int t;
cin>>t;
while(t--){


int n;
cin>>n;
string s;
cin>>s;

int temp=200;
string ans="";
for(int i =0;i<n;i++){
if(s[i]-'0'<temp){
temp= s[i]-'0';
ans+=s[i];
}
else{
    break;
}
}
string s1="";
for(int i=0;i<ans.size();i++){
s1+= ans[ans.size()-1-i];

}

ans+= s1;



cout<<ans<<endl;
}
return 0;
}



