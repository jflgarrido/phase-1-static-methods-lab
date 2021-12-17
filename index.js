class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, "")
  }
  static titleize(string){
    let splitString = string.split(" ")
    let forbiddenWordsArray = ["the","a","an","but","of","and","for","at","by","from"]
    
    let emptyArray = []
    for(const item of splitString){
        if(forbiddenWordsArray.includes(item)){
          emptyArray.push(item)
         }
        else {
          emptyArray.push(this.capitalize(item))
        } 
    }
    emptyArray.unshift(this.capitalize(emptyArray.shift()))
    return emptyArray.join(" ") 
  }
   
}