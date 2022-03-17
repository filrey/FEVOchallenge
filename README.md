# FEVO Coding Challenge


	 Assumptions:
  If two accounts share an email then they were created by the same person
  If two names are the same they don't necessarily refer to the same person
  If the names differ when merging, pick one
  The accounts list will fit in memory

	The input will be in json structure. Attached is an example accounts.json.

Please write a program in your language of choice, that
  1: Reads and parses the accounts.json file attached
  2: Merges the accounts
  3: Prints the merged accounts to the console in Json structure

	An account consists of 
	{
	  applications: [string],
	  emails: [string],
	  name: string
	}
# Example
	Input
	[
	  {
	    application: "x",
	    emails: ["a", "b", "c"],
	    name: "Person 1"
	  },
	  {
	    application: "y",
	    emails: ["c", "d"],
	    name: "Person 1"
	  }
	]

	Output
	[
	  {
	    applications: ["x", "y"],
	    emails: ["a", "b", "c", "d"],
	    name: "Person 1"
	  }
	]

> Thanks for visiting!  **- Filiberto**


