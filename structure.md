**RIDE**
id:integer
name: string
creationDate: date
durationSeconds: integer
minAge:integer
minHeightCm:integer
status: Enum("open","closed","testing")

**RIDE_CATEGORY**
id:integer
name: string


**USER**
id:integer
name: string
dateOfBirth:date
email: string
phone?:string

**TICKET**
id:integer
boughtAt: dateTime

**TICKET_TYPE**
id:integer
name: string
cost: integer
