export default function sortAlgo ( tickets, sortPreference )
{
  switch ( sortPreference )
  {
    case "High To Low":
      return [ ...tickets ].sort( ( a, b ) => b.priority.localeCompare( a.priority ) );
    case "Low To High":
      return [ ...tickets ].sort( ( a, b ) => a.priority.localeCompare( b.priority ) );
    default:
      return tickets;
  }

}