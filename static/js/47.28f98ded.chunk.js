"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[47],{7047:function(n,A,e){e.r(A),e.d(A,{default:function(){return v}});var r,t,a,i,d,o,x,h=e(7689),c=e(7377),p=e(168),l=e(5867),s=e(1087),u=(0,l.ZP)(s.rU)(r||(r=(0,p.Z)(["\n@media screen and (max-width:400px){\nmax-width: 300px; \n}\n@media screen and (min-width:401px) and (max-width: 766px){\nwidth: 400px; \n}\n\n   @media screen and (min-width:767px){\n  width: calc((100% - 30px) / 2);\n } \n  @media screen and (min-width:1111px){\n  width: calc((100% - 60px) / 4);\n } \n  cursor:pointer;\n  text-decoration: none;\n  color: black;\n  text-align: center;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    &:hover {\n     transform: scale(1.03);\n   }\n  &:hover,\n  :focus {\n    color:orange;\n    border-color: orange;\n  }\n  \n"]))),m=l.ZP.ul(t||(t=(0,p.Z)(["\n list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-right:20px;\n  margin-left: auto;\n  margin-right: auto;\n  "]))),g=l.ZP.li(a||(a=(0,p.Z)(["\n width: 100%;\n \n"]))),w=l.ZP.div(i||(i=(0,p.Z)(["\nwidth: 100%\n"]))),f=l.ZP.img(d||(d=(0,p.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  "]))),b=l.ZP.h2(o||(o=(0,p.Z)(["\n    margin: 0;\n  \n    width: 100%;\n"]))),J=l.ZP.p(x||(x=(0,p.Z)(["\n   margin: 0;\n"]))),Z=e(184),v=function(n){var A=n.movies,e=(0,h.TH)();return(0,Z.jsx)(m,{children:A.map((function(n){var A=n.id,r=n.title,t=n.vote_average,a=n.poster_path,i=n.original_title,d=n.original_name;return(0,Z.jsx)(u,{to:"/movies/".concat(A),state:{from:e},children:(0,Z.jsxs)(g,{children:[(0,Z.jsx)(w,{children:(0,Z.jsx)(f,{src:null===a?c:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r,width:"320"})}),(0,Z.jsx)(b,{children:r||i||d}),(0,Z.jsxs)(J,{children:["User score: ",t]})]},A)},A)}))})}},7377:function(n){n.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAYFBMVEXy8vJ2dnb19fX5+flxcXFzc3Pq6urMzMyurq5ubm5+fn6FhYVra2vi4uLn5+fu7u6+vr6VlZW3t7fFxcWQkJDT09Oampre3t6Tk5N6enqhoaHY2Nirq6uKioqenp67u7tegggxAAAE4klEQVR4nO3c63qrKBgFYP0QDxCPeIjH3P9dDmhMTJM9iXtmWtmz3j9NjenDKghioY4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3yD1d3Hopwu8TxqM0WkHEcZ2Jbxw7u4S5clPl3kHakbuetEO+tdxYT9d7M+Rcl1RBJ9TJee1b08jpSziY0KfYyHnNrVRyjw+rr0GfVAxbPCsCyjj+RWLq/79EGBtQIo7KUQZvOs/rA3YS4+7nJ+GN3Voa8D0fB0N2+DvE1oakProOozz7umUh+9sDVh4a8Cn0j/emlkakIX3gPHDCWke5duElgak6t5E0+37Sa3v5M6bhJYGdFK5djJqU12UTOawd05uB20N6ARiThhtK5DS6TqBqG91aG1AJ9ADoeeF2/coX2dSvF7r0N6AxBoVOJsbGfLztedx79ehvQFNjW3HA/K77Ux4TWhzwC/Cx4m8t7RS2wNuesuvjyqW65BCqwOSytMl4xB9Deh6ZsS3vAYzl0+6nigNXz2JiurU8oCZHgx5l+h87Yt8Lpe+1QFJzYM9n5zX+WwPSOr6hJTLl/HWgPY9dLoGVLdh/VdPgk1AsrYGM/H2CbfVTfSDfDYHpOCX7fIPCRh67/Mh4BH9DwJG+wJaOkxQ0YoPlL55/mZjQD2f/4id88Hx9YT3NftqUF+DzWfVNyN9L3q2KaB5XCjkDq2eUNnzF2zH8Sfdf3Ju/nT2GZeLyqaA1NTc20VmNuUzj+dVuEfW/HSJd6N0D9tWcgEAAAAAAAAAAADAn4ws2tr5W9Tk/3QR/lNp6Fq2w3qvpE/fn7Q47i+CEbH4drGZxQf3sprDZE4wx2hZdbAcT1NzeP0Eo2TZhff48UNgsqhKIbu5LVJalDK/7fokJROqhniQ5cWhfpJlMa+0J1UKUcdNHevP99M4TkFdm+NJWMruzYbD78b4KLssFLLRBeylDLOu7a5dC2VezIK2rbOwnVQ7VBc56tPisxsGqmsns5v54uZF0QlPx6LKLYtL154P1TMxTwS6FTZjzZwkPyeMWCAuy3ukeELBadDHKlcq3SgbGTpOKCrTPhUvY1Ii042cNXJwHF90vn7di+JIdciWLZ40tIyU28xFK+6LmnUNnnrzchzn/QWhdGJ5WQLkOqAJZn6KEg27iJjNO+vFkYZP5g2mOKw4MVbw+RAFfAm61KBnvmHncjmNO010XVWR6SZ6KpYwaVuxuuxnBT9gQNIB6RYweg5Ylstp3OmvAUnpgN7SHKnRAXN3XcN2sIBzx2gC6hY5FzcTtyb6HDCNxXXdiOlkynpuuTSMMevy+xK242B8DmiaKCVl7etrqJLhMr4/N1ETMB2kudZY4OprMJBhzyi+6J6KGi9z9HFfHep/d2yuQd3PizwLClnfdoZ48XMNUlOOWVUVojar9pQUUz2OlXkzFF2minw82DBxuwb1l7hrXXFZ78/0OJiYC9J5CKjv4Lq2baWqpGnRaTAMeVvPn6ly4Y7hnsWK3+B6xWzvu27vLbdqz6cxqhLTSsn8wxL9hcVjff/4kRrob1tDVEt/q28OrFqR9zEql13a+obuDw2oeGHaZTyWH0+srGJ2FoquK9tj9Zz/JmrCrhvUgSe8/xQdcJILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgrb8AVdFTjJLjUDkAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=47.28f98ded.chunk.js.map