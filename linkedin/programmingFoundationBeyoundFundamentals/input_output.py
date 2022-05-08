infile=open('values.txt','rt')
outfile=open('values_totaled.txt','wt')
print('processing input')
sum=0
for line in infile:
    sum+int(line)
    print(line.rstrip(),file=outfile)
print('\ntotal :'+str(sum) , file=outfile)
outfile.close()    
print('output complete')