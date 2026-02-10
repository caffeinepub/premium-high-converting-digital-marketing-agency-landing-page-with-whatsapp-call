import Text "mo:core/Text";
import Map "mo:core/Map";

actor {
  type LeadForm = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  let leads = Map.empty<Text, LeadForm>();

  public shared ({ caller }) func submitLead(id : Text, name : Text, email : Text, company : Text, message : Text) : async () {
    let lead : LeadForm = {
      name;
      email;
      company;
      message;
    };
    leads.add(id, lead);
  };

  public query ({ caller }) func getLead(id : Text) : async ?LeadForm {
    leads.get(id);
  };
};
