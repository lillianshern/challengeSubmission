//1. Create a loop that writes "I love homework" 5 times
document.write('Loop 1</br>')
for (i=0;i<5;i++){
    document.write('I love homework</br>')
}
document.write("</br>")
//2. Create a loop that counts from 0 to 4 and writes the current number on the screen
document.write('Loop 2</br>')
for (i=0;i<5;i++){
    document.write(i+'</br>')
}
document.write("</br>")
//3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
//- ex. 15, 18, 21, 24, 27, 30
document.write('Loop 3</br>')
for (i=15;i<31;i+=3){
    document.write(i+'</br>')
}
document.write("</br>")
// 4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// document.write("⬜⬜⬜⬜") (X) <-- don't do this)
// HINT: Loops can be nested inside another loop
document.write('Loop 4</br>')

for (i=0;i<4;i++){
    for(j=0;j<4;j++){
        document.write('⬜')
    }
    document.write('</br>')
}
document.write("</br>")
// 5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice triangle shape. Create a stack that is 7 bones high.
// - You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this: 

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴 
// 🦴🦴🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴🦴🦴
document.write('Loop 5</br>')

for (i=0;i<7;i++){
    for(j=0;j<i;j++){
        document.write('🦴')
    }
    document.write('</br>')
}
document.write("</br>")
// 6. Create the same pile of bones as challenge 5, but this time, center them by adding a ~ in front so the shape is a pyramid 

// ~~~~~~🦴
// ~~~~~🦴🦴
// ~~~~🦴🦴🦴
// ~~~🦴🦴🦴🦴
// ~~🦴🦴🦴🦴🦴 
// ~🦴🦴🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴🦴🦴
document.write('Loop 6</br>')

for (i=6;i>0;i--){
    for(j=1;j<i;j++){
        document.write('~')
    }
    for(y=7;y>j;y--){
        document.write('🦴')
    }
    document.write('</br>')
}


document.write("</br>")
// 7. Create a loop that creates 5 stacks of bones, each with another row at the bottom

// 🦴

// 🦴
// 🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴
document.write('Loop 7</br>')

for (counter=1;counter<=6;counter++){
    for(i=1;i<counter;i++){
        for(j=1;j<=i;j++){
            document.write('🦴')
        }
        document.write('</br>')
    }
    document.write('</br>')
}