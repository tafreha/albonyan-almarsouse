class stack{

    var stackArray = [String]()
    func push(item: String){
self.stackArray.append(item)


    }
    func pop()-> String?{
if stackArray.last != nil{
    let lastString = self.stackArray.last
    self.stackArray.removeLast()
    return lastString!
}
else{
    return nil
}
    }
     func peak()-> String?{
if stackArray.last != nil{
    return self.stackArray.last
  }
else{
    return nil
}
}
}

var deck:stack = stack()
deck.push(item: "Heart : Queen")
deck.push(item: "Spade : Jack")
deck.push(item: "Heart : 9")
deck.push(item: "Diamond : 4")
print(deck.peak()!)
print(deck.peak()!)

var firstItemPopped = deck.pop()
var secondItemPopped = deck.pop()
print(firstItemPopped!)
print(secondItemPopped!)

