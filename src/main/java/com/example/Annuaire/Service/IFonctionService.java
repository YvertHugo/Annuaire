package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Fonction;
import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;

import java.util.List;

public interface IFonctionService {
    List<Fonction> findAll();
    Fonction findById(Long id);
    Fonction update(Fonction fonction);
    Fonction save(Fonction fonction);
}