import React, { useState } from "react";
import googleicon from "../../assets/smallpng.png";
import search from "../../assets/search.png";
import { delay, motion } from "framer-motion";
import google from '../../assets/smallpng.png';
import "./dmac.css";

const Dmac = () => {
  const [val, setVal] = useState(null);
  const click = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:doc+|+ext:docx+|+ext:odt+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv|+ext:xlsx");
  }
  const click1 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" intitle:index.of");
  }
  const click2 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini+|+ext:env");
  }
  const click3 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:sql+|+ext:dbf+|+ext:mdb");
  }
  const click4 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:log");
  }
  const click5 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup");
  }
  const click6 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" inurl:login+|+inurl:signin+|+intitle:Login+|+intitle:signup+|+inurl:auth");
  }
  const click7 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+' intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"');
  }
  const click8 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+' "PHP+Parse+error"+|+"PHP+Warning"+|+"PHP+Error"');
  }
  const click9 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+' ext:php+intitle:phpinfo+"published+by+the+PHP+Group"');
  }
  const click10 = () => {
    window.open("https://www.google.com/search?q=site:pastebin.com%20|%20site:paste2.org%20|%20site:pastehtml.com%20|%20site:slexy.org%20|%20site:snipplr.com%20|%20site:snipt.net%20|%20site:textsnip.com%20|%20site:bitpaste.app%20|%20site:justpaste.it%20|%20site:heypasteit.com%20|%20site:hastebin.com%20|%20site:dpaste.org%20|%20site:dpaste.com%20|%20site:codepad.org%20|%20site:jsitor.com%20|%20site:codepen.io%20|%20site:jsfiddle.net%20|%20site:dotnetfiddle.net%20|%20site:phpfiddle.org%20|%20site:ide.geeksforgeeks.org%20|%20site:repl.it%20|%20site:ideone.com%20|%20site:paste.debian.net%20|%20site:paste.org%20|%20site:paste.org.ru%20|%20site:codebeautify.org%20%20|%20site:codeshare.io%20|%20site:trello.com%20%22" + `${val}`+"%22");
  }
  const click11 = () => {
    window.open("https://www.google.com/search?q=site:github.com%20|%20site:gitlab.com%20%22" + `${val}`+"%22");
  }
  const click12 = () => {
    window.open("https://www.google.com/search?q=site:stackoverflow.com%20%22" + `${val}`+"%22+");
  }
  const click13 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+"+inurl:signup+|+inurl:register+|+intitle:Signup");
  }
  const click14 = () => {
    window.open("https://www.google.com/search?q=site:*." + `${val}`);
  }
  const click15 = () => {
    window.open("https://www.google.com/search?q=site:*.*." + `${val}`);
  }
  const click16 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:doc+|+ext:docx+|+ext:odt+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv");
  }
  const click17 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:doc+|+ext:docx+|+ext:odt+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv");
  }
  const click18 = () => {
    window.open("https://www.google.com/search?q=site:" + `${val}`+" ext:doc+|+ext:docx+|+ext:odt+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv");
  }
  const change = event => {
      setVal(event.target.value)
  }
  return (
    <div className="app__dmac section__padding" id="dmac">
      <div className="app__dmac-content">
        <h1 className="gradient__text">
          Unlock the secrets of google engine !!
        </h1>
        <p>
          To search please enter the domain name and the click on the topic you
          wish to search
        </p>
        <div className="app__dmac-content_googleicon">
            <img class="image1" src={googleicon} alt="GoogleIcon" />
            <img class="image2" src={search} alt="GoogleIcon" />
        </div>
      </div>

      <div className="app__dmac-search">
        <div className="app__dmac-section-card">
          <div className="app__dmac-section-input">
            <h1>Enter the domain-name</h1>
            <input onChange={change}type="text" placeholder="www.example.com" value={val}/>
            <br />
            <h1> From below Lising choose one to search</h1>
           <div className="app__buttons">
           <button type="button"  class="button-30" role="button"  onClick={click} >Public Document Files</button>
            <button type="button"  class="button-30" role="button" onClick={click1}>Directory Listing Vulnerability</button>
            <button type="button"  class="button-30" role="button"onClick={click2}>Config Files Exposure</button>
            <button type="button"  class="button-30" role="button" onClick={click3}>Database File Exposed</button>
            <button type="button"  class="button-30" role="button"onClick={click4}>Log Files Exposed</button>
            <button type="button"  class="button-30" role="button" onClick={click5}>Backup and Old Files</button>
            <button type="button"  class="button-30" role="button"onClick={click6}>Login Pages</button>
            <button type="button"  class="button-30" role="button" onClick={click7}>SQL Errors</button>  
            <button type="button"  class="button-30" role="button" onClick={click8}>PHP errors / Warnings</button>
            <button type="button"  class="button-30" role="button" onClick={click9}>phpinfo() </button>
            <button type="button"  class="button-30" role="button" onClick={click10}>Search pastebin.com/pasteing sites</button>
            <button type="button"  class="button-30" role="button" onClick={click11}>Search Github/GitLab</button>
            <button type="button"  class="button-30" role="button" onClick={click12}>StackOverFlow pages</button>
            <button type="button"  class="button-30" role="button" onClick={click13}>SignUp pages</button>
            <button type="button"  class="button-30" role="button" onClick={click14}>Find Subdomains</button>
            <button type="button"  class="button-30" role="button" onClick={click15}>Find Sub-Subdomains</button>  
           </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dmac;

