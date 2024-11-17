var phone = getVarFromURl('phone');
var phone_number = '<?=$phone_number;?>';
const footer_message = "les fenêtres Defender SmartScreen a empêché une application non reconnue de s'afficher. L'exécution de cette application peut mettre votre PC à risque. L'analyse de Windows Defender a trouvé des logiciels potentiellement indésirables sur cet appareil qui peuvent voler vos mots de passe, identité en ligne, informations financières, fichiers personnels, photos ou documents.";
const support_code = "055679000";
const table_heads = "<th>Nom</th><th>Taper</th><th>Type d'objet</th><th>Emplacement</th>"
const table_data1 = "<td>Trojan.DNSCharge.AC</td><td>Logiciels malveillants</td><td>Valeur de registre</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"
const table_data2 = "<td>Trojan.Dropper.Autoit</td><td>Logiciels malveillants</td><td>Fichier</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"
const table_data3 = "<td>PUP.Optional.RelevantK</td><td>Potentiellement indésirable</td><td>Fichier</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"
const table_data4 = "<td>PUP.Optional.DownLoad</td><td>Potentiellement indésirable</td><td>Fichier</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"
const table_data5 = "<td>Adware.TopGuard</td><td>Potentiellement indésirable</td><td>Fichier</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"
const table_data6 = "<td>PUP.Optional.RelevantK</td><td>Logiciels malveillants</td><td>Fichier</td><td>HKLM\SYSTEM\CURRENTCONTROLS</td>"